-- Create table for storing portfolio reactions (likes and hearts)
CREATE TABLE IF NOT EXISTS portfolio_reactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  likes INTEGER DEFAULT 0 NOT NULL,
  hearts INTEGER DEFAULT 0 NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create table for tracking user votes (to prevent duplicate votes)
CREATE TABLE IF NOT EXISTS user_votes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_identifier TEXT NOT NULL UNIQUE,
  vote_type TEXT NOT NULL CHECK (vote_type IN ('like', 'heart')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Insert initial row for reactions if it doesn't exist
INSERT INTO portfolio_reactions (id, likes, hearts)
VALUES ('00000000-0000-0000-0000-000000000001', 0, 0)
ON CONFLICT (id) DO NOTHING;

-- Enable Row Level Security (RLS)
ALTER TABLE portfolio_reactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_votes ENABLE ROW LEVEL SECURITY;

-- Create policies for portfolio_reactions
-- Allow anyone to read reactions
CREATE POLICY "Allow public read access to reactions"
ON portfolio_reactions FOR SELECT
TO public
USING (true);

-- Allow anyone to update reactions (we'll handle validation in the app)
CREATE POLICY "Allow public update access to reactions"
ON portfolio_reactions FOR UPDATE
TO public
USING (true)
WITH CHECK (true);

-- Create policies for user_votes
-- Allow anyone to read their own votes
CREATE POLICY "Allow public read access to votes"
ON user_votes FOR SELECT
TO public
USING (true);

-- Allow anyone to insert votes
CREATE POLICY "Allow public insert access to votes"
ON user_votes FOR INSERT
TO public
WITH CHECK (true);

-- Create function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_portfolio_reactions_updated_at
    BEFORE UPDATE ON portfolio_reactions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

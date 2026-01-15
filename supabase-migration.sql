-- Migration script to convert from Like/Heart system to single Reaction system
-- Run this if you already have the old database structure with 'likes' and 'hearts' columns

-- Step 1: Add the new 'reactions' column
ALTER TABLE portfolio_reactions 
ADD COLUMN IF NOT EXISTS reactions INTEGER DEFAULT 0 NOT NULL;

-- Step 2: Migrate existing data (combine likes and hearts into reactions)
UPDATE portfolio_reactions 
SET reactions = COALESCE(likes, 0) + COALESCE(hearts, 0);

-- Step 3: Drop the old columns
ALTER TABLE portfolio_reactions 
DROP COLUMN IF EXISTS likes,
DROP COLUMN IF EXISTS hearts;

-- Step 4: Update the vote_type constraint to only allow 'reaction'
-- First, drop the old constraint
ALTER TABLE user_votes 
DROP CONSTRAINT IF EXISTS user_votes_vote_type_check;

-- Then add the new constraint
ALTER TABLE user_votes 
ADD CONSTRAINT user_votes_vote_type_check 
CHECK (vote_type IN ('reaction'));

-- Step 5: Update existing vote records to use 'reaction' type
-- (This will convert all 'like' and 'heart' votes to 'reaction')
UPDATE user_votes 
SET vote_type = 'reaction' 
WHERE vote_type IN ('like', 'heart');

-- Verify the migration
SELECT * FROM portfolio_reactions;
SELECT vote_type, COUNT(*) as count FROM user_votes GROUP BY vote_type;

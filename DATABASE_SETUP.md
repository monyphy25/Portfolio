# Database Setup for Like and Heart Feature

This guide will help you set up the Supabase database to store Like and Heart reactions for your portfolio.

## Prerequisites

- A Supabase account (sign up at https://supabase.com)
- Your Supabase project URL and anon key already configured in `.env`

## Step-by-Step Setup

### 1. Access Supabase SQL Editor

1. Go to your Supabase project dashboard
2. Click on **SQL Editor** in the left sidebar
3. Click **New Query** to create a new SQL query

### 2. Run the Database Setup Script

1. Open the file `supabase-setup.sql` in this project
2. Copy all the SQL code from that file
3. Paste it into the Supabase SQL Editor
4. Click **Run** or press `Ctrl+Enter` to execute the script

### 3. What the Script Creates

The script will create:

#### Tables:
- **`portfolio_reactions`** - Stores the total count of likes and hearts
  - `id` (UUID) - Primary key
  - `likes` (INTEGER) - Total number of likes
  - `hearts` (INTEGER) - Total number of hearts
  - `created_at` (TIMESTAMP) - When the record was created
  - `updated_at` (TIMESTAMP) - When the record was last updated

- **`user_votes`** - Tracks which users have voted to prevent duplicates
  - `id` (UUID) - Primary key
  - `user_identifier` (TEXT) - Unique identifier for each user
  - `vote_type` (TEXT) - Either 'like' or 'heart'
  - `created_at` (TIMESTAMP) - When the vote was recorded

#### Security:
- Row Level Security (RLS) policies for public read/write access
- Unique constraint on `user_identifier` to prevent duplicate votes
- Automatic timestamp updates

### 4. Verify the Setup

After running the script, verify the tables were created:

1. In Supabase dashboard, go to **Table Editor**
2. You should see two new tables:
   - `portfolio_reactions`
   - `user_votes`
3. Click on `portfolio_reactions` - you should see one row with `likes: 0` and `hearts: 0`

### 5. Test the Feature

1. Make sure your `.env` file has the correct Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```

2. Run your development server:
   ```bash
   npm run dev
   ```

3. Scroll to the footer and test the Like and Heart buttons
4. The counts should persist across page refreshes
5. Open the site in a different browser - you should see the same counts
6. Try clicking again - you should be prevented from voting twice

## How It Works

### User Identification
- Each user gets a unique identifier stored in their browser's localStorage
- This identifier is used to track if they've already voted
- Format: `user_[timestamp]_[random_string]`

### Vote Process
1. User clicks Like or Heart button
2. System checks if user has already voted (queries `user_votes` table)
3. If not voted:
   - Records the vote in `user_votes` table
   - Increments the count in `portfolio_reactions` table
   - Updates the UI
4. If already voted:
   - Button is disabled
   - No action is taken

### Real-time Updates
- Uses Supabase real-time subscriptions
- When anyone votes, all connected users see the updated counts immediately
- No page refresh needed

### Fallback Mechanism
- If Supabase is unavailable, the system falls back to localStorage
- This ensures the feature still works even if the database is down

## Troubleshooting

### Issue: "Cannot find module '@/lib/supabase'"
**Solution:** This is a TypeScript path alias. Make sure your `tsconfig.json` has:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Issue: Database queries fail
**Solution:** 
1. Check your `.env` file has correct credentials
2. Verify the SQL script ran successfully
3. Check browser console for specific error messages
4. Verify RLS policies are enabled in Supabase

### Issue: Votes not persisting
**Solution:**
1. Check Supabase dashboard > Table Editor > `portfolio_reactions`
2. Verify the row with id `00000000-0000-0000-0000-000000000001` exists
3. Check browser console for errors
4. Verify your Supabase project is not paused

### Issue: Can vote multiple times
**Solution:**
1. Check if `user_votes` table is being populated
2. Clear your browser's localStorage and try again
3. Verify the unique constraint on `user_identifier` exists

## Database Maintenance

### View Current Stats
```sql
SELECT * FROM portfolio_reactions;
```

### View All Votes
```sql
SELECT * FROM user_votes ORDER BY created_at DESC;
```

### Reset Counts (for testing)
```sql
UPDATE portfolio_reactions 
SET likes = 0, hearts = 0 
WHERE id = '00000000-0000-0000-0000-000000000001';
```

### Clear All Votes (for testing)
```sql
DELETE FROM user_votes;
```

## Features

✅ **Persistent Storage** - Data stored in Supabase database  
✅ **Real-time Updates** - See changes instantly across all users  
✅ **Duplicate Prevention** - Users can only vote once  
✅ **Fallback Support** - Works with localStorage if database fails  
✅ **Unique User Tracking** - Each user gets a unique identifier  
✅ **Secure** - Row Level Security enabled  
✅ **Automatic Timestamps** - Tracks when votes are recorded  

## Next Steps

After setting up the database, you can:
- Monitor votes in the Supabase dashboard
- Add analytics to track voting patterns
- Export data for analysis
- Add more reaction types (e.g., fire, clap, etc.)
- Implement vote removal/change functionality

---

**Need Help?** Check the Supabase documentation at https://supabase.com/docs

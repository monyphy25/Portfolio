# Reaction System Update

## What Changed?

The footer reaction system has been simplified from **two separate buttons (Like ❤️ and Heart 👍)** to **one single Reaction button (❤️)**.

## Changes Made

### 1. **Frontend (Footer.tsx)**
- Removed separate Like and Heart buttons
- Added a single Reaction button with a heart icon
- Simplified state management (one `reactions` counter instead of `likes` and `hearts`)
- Updated styling with pink/rose gradient theme
- Removed the "Only one react" text indicator

### 2. **Database Schema (supabase-setup.sql)**
- Changed `likes` and `hearts` columns to a single `reactions` column
- Updated `vote_type` constraint from `('like', 'heart')` to `('reaction')`
- Simplified the initial data insert

### 3. **Documentation (DATABASE_SETUP.md)**
- Updated all references from Like/Heart to Reaction
- Simplified instructions to reflect single button system

## For New Users

If you're setting up the database for the first time:

1. Simply run the `supabase-setup.sql` file in your Supabase SQL Editor
2. The new single-reaction system will be set up automatically

## For Existing Users (Migration Required)

If you already have the old Like/Heart database structure:

1. **Run the migration script** in your Supabase SQL Editor:
   - Open `supabase-migration.sql`
   - Copy and paste the entire content into Supabase SQL Editor
   - Click **Run** to execute the migration

2. **What the migration does:**
   - Adds a new `reactions` column
   - Combines your existing `likes` and `hearts` counts into `reactions`
   - Removes the old `likes` and `hearts` columns
   - Updates all vote records to use the new 'reaction' type
   - Preserves all your existing data

3. **Clear browser cache** (optional but recommended):
   - Clear localStorage to reset the local state
   - Or just wait for the page to sync with the new database structure

## Testing

After updating:

1. Refresh your portfolio page
2. Scroll to the footer
3. You should see a single heart button with the reaction count
4. Click it to test - you should only be able to react once
5. Open in another browser - the count should be the same

## Rollback (If Needed)

If you need to go back to the Like/Heart system, you can restore from your Supabase backup or manually recreate the old structure. However, you'll lose the combined reaction count.

---

**Need help?** Check the `DATABASE_SETUP.md` file for detailed setup instructions.

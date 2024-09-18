import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ztpbbabsuoqzjzjtperd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0cGJiYWJzdW9xemp6anRwZXJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2ODcyNDIsImV4cCI6MjA0MjI2MzI0Mn0.YQUbG324nmGuyGDg5ozcGPxuVfDHW5iuKTXZMegO4Q8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

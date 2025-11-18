// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://zzccfkarhzywfkxypxyv.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6Y2Nma2FyaHp5d2ZreHlweHl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxODIyMjgsImV4cCI6MjA3ODc1ODIyOH0.h4EnjRUx3JMq0WD1-FIP7NlO2_C8AAHFbiNCae0Kzr4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

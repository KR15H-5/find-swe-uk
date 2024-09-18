import { supabase } from '../lib/supabaseClient'

export interface Internship {
  id: number;
  company: string;
  logo: string;
  position: string;
  location: string;
  deadline: string;
  application_link: string;
  visible: boolean;
}

export async function fetchInternships(): Promise<Internship[]> {
  const { data, error } = await supabase
    .from('internships')
    .select('*')
    .eq('visible', true)

  if (error) {
    console.error('Error fetching internships:', error)
    return []
  }

  return data || []
}
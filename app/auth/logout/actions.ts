'use server'

import { createClient } from "@/utils/supabase/server";
import { redirect } from 'next/navigation'

export async function logout() {
    const supabase = createClient()

    const userLogoutError = await supabase.auth.signOut();
    if (!userLogoutError.error) {
      redirect('/')
    } else {
      console.log('erorr', userLogoutError)
    }
}
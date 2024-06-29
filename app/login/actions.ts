'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

enum Errors {
  AuthApiError = 'AuthApiError'
}

export async function login(formData: FormData) {
  const supabase = createClient()

  const invalidCreds = 'Invalid login credentials';

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('username') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.log('error', error.name, error.status, error.code, error.message)
    if (error.name === Errors.AuthApiError && error.message === invalidCreds) {
      return 'Invalid login credentials'
    }
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('username') as string,
    password: formData.get('password') as string,
  }
  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
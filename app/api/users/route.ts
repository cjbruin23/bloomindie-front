import { createClient } from '@/utils/supabase/server'

export async function GET(request: Request) {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser('234235235')
    if (error) {
        return Response.json({error: '500 Server Error'}, { status: 500})
    }
    console.log('data', data.user)
    return Response.json({data: data.user})
}
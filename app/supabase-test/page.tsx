'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function SupabaseTestPage() {
    const [status, setStatus] = useState('Checking connection...')
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        const supabase = createClient()

        async function checkConnection() {
            try {
                // Just checking if we can get the session or url
                // We will try to fetch from a system table or just verify initialization

                // This query might fail if RLS is strict and no table exists, 
                // but the client initialization itself shouldn't throw.
                // We'll just display the supabase URL to confirm env vars are loaded.

                if (supabase) {
                    setStatus('Supabase client initialized successfully!')
                    console.log('Supabase client:', supabase)
                } else {
                    setStatus('Failed to initialize Supabase client.')
                }

            } catch (error) {
                setStatus('Error connecting: ' + (error as Error).message)
            }
        }

        checkConnection()
    }, [])

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Supabase Connection Test</h1>
            <p className="mb-4">Status: <span className="font-semibold">{status}</span></p>
            <div className="bg-gray-100 p-4 rounded">
                <p>Supabase URL: {process.env.NEXT_PUBLIC_SUPABASE_URL}</p>
            </div>
        </div>
    )
}

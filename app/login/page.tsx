import { login } from '@/app/auth/actions'
import Link from 'next/link'

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="w-full max-w-md p-8 bg-white dark:bg-slate-800 rounded-lg shadow-md border dark:border-slate-700">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Login</h1>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full p-2 border rounded dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:placeholder-gray-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300" htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="w-full p-2 border rounded dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:placeholder-gray-400"
                        />
                    </div>

                    <button
                        formAction={login}
                        className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition dark:bg-indigo-500 dark:hover:bg-indigo-600"
                    >
                        Log in
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account? <Link href="/signup" className="underline hover:text-indigo-600 dark:hover:text-indigo-400">Sign up</Link>
                </p>
            </div>
        </div>
    )
}

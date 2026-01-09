import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900 py-8">
            <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                <div className="mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} Demo App. All rights reserved.
                </div>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-gray-900 dark:hover:text-white transition">
                        Terms
                    </Link>
                    <Link href="#" className="hover:text-gray-900 dark:hover:text-white transition">
                        Privacy
                    </Link>
                    <Link href="#" className="hover:text-gray-900 dark:hover:text-white transition">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    )
}

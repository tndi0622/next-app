export default function Newsletter() {
    return (
        <section className="mt-16 py-12 px-6 bg-indigo-50 dark:bg-slate-800/50 rounded-2xl border border-indigo-100 dark:border-slate-700 text-center">
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                최신 뉴스레터를 받아보세요
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                매주 새로운 인사이트와 트렌드를 여러분의 메일함으로 직접 배달해 드립니다.
                지금 바로 구독하세요!
            </p>

            <a
                href="https://page.stibee.com/subscriptions/465282"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors shadow-lg shadow-indigo-500/30"
            >
                메일링 리스트 구독하기
            </a>
        </section>
    )
}

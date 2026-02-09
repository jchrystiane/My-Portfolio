function TextArea() {
  const quickActions = [
    'Create ',
    'Help me learn',
    'Boost my day',
    '🚀 Explore my portfolio projects',
  ]

  return (
    <section className="w-full max-w-3xl space-y-10">
        <div className="space-y-3">
            {/* <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900/70 px-3 py-1 text-xs text-neutral-300">
            <span className="h-2 w-2 rounded-full bg-gradient-to-tr from-sky-400 via-emerald-400 to-pink-500" />
            <span>Hi Jared Chrystiane</span>
            </div> */}

            <h1 className="text-4xl text-center sm:text-5xl font-semibold">
                Where should we start?
            </h1>
        </div>

        <div className="rounded-3xl border p-4">
            <div className="flex items-center gap-3 rounded-2xl px-4 py-3">
                <div className="flex-1 flex items-center gap-3">
                    <input
                    className="flex-1 bg-transparent text-sm sm:text-base text-neutral-100 placeholder-neutral-500 outline-none border-none"
                    placeholder="Ask me anything..."/>
                </div>
            </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
            {quickActions.map((label) => (
                <button
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-5 py-3 text-md font-medium text-neutral-200">
                    <span>{label}</span>
                </button>
            ))}
        </div>
    </section>
  )
}

export default TextArea;
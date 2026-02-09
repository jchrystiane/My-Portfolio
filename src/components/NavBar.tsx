function NavBar() {
  return (
    <header className="flex items-center justify-between px-6 sm:px-10 pt-6">
      <div className="text-sm font-medium text-neutral-400">Jared Chrystiane</div>

      <div className="flex items-center gap-4">
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-sky-500 via-emerald-400 to-pink-500" />
      </div>
    </header>
  )
}

export default NavBar
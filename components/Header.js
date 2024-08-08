export default function Header() {
  return (
    <header>
      <div className="mb-[3rem] flex h-16 w-full items-center justify-between">
        <a
          href="/"
          className="flex font-sans text-2xl font-bold text-black no-underline"
        >
          <p>Jongjin</p>
          <p className="text-blue-500">'</p>
          <p>s Log</p>
        </a>
        <nav className="font-sans text-xl font-bold">
          <a href="/about-me">About Me!</a>
        </nav>
      </div>
    </header>
  )
}

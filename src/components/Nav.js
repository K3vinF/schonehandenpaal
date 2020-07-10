import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="nav" role="navigation" aria-label="main navigation">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  )
}

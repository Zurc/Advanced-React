import Link from 'next/link';

const Nav = () => {
  return (
    <div>
      <Link href="/sell">
        <a>Go Sell...</a>
      </Link>
      <Link href="/">
        <a>Go home...</a>
      </Link>
    </div>
  )
}

export default Nav

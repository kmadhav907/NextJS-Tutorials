import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <h1> Ninjas </h1>
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>{' '}
      <Link href='/about'>
        <a>About</a>
      </Link>{' '}
      <Link href='/ninjas'>
        <a>NinjaListing</a>
      </Link>
    </nav>
  )
}

export default Navbar

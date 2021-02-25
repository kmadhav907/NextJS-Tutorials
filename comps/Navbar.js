import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <h1>
          {' '}
          <Image src='/logo.png' width='50' height='46'></Image> Ninjas
        </h1>
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

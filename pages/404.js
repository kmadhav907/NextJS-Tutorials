import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
const NotFound = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [])
  return (
    <>
      <Head>
        <title>No Page Found</title>
      </Head>
      <div className='notFound'>
        <h1>Oops!! Page Not Found</h1>
        <p>
          Go Back to HomePage <br />
        </p>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
    </>
  )
}

export default NotFound

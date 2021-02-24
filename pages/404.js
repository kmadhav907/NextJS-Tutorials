import Link from 'next/link'
const NotFound = () => {
  return (
    <div className='notFound'>
      <h1>Oops!! Page Not Found</h1>
      <p>
        Go Back to HomePage <br />
      </p>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </div>
  )
}

export default NotFound

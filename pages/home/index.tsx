import Link from 'next/link'

function Home() {
  return (
    <div>
      <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>Blog Post</a>
        </Link>
      </li>
    </ul>
    <h1>Hello Dashboard</h1>
    </div>
  )
}

export default Home
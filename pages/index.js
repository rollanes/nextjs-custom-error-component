import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Head>
      <title>Rick & Morty page!</title>
    </Head>
    <div className="home-container">
      <h2>Welcome to my amazing Rick and Morty Page!</h2>
      <div className="img-container">
        <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"></img>
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"></img>
      </div>
      <div className="link-container">
        <Link href="/characters">
          <p>
            Show me Rick and Morty Characters!
          </p>
        </Link>
        <Link href="/locations">
          <p>
            Show me Rick and Morty locations!
          </p>
        </Link>
      </div>
    </div>
    </>
  )
}
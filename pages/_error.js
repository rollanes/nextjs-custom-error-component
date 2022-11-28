import Head from 'next/head';
import Link from 'next/link';

function Error({ statusCode }) {
    return (
      <>
      <Head>
        <title>Rick & Morty page!</title>
      </Head>
      <div className="error-container">
      <img src="https://rickandmortyapi.com/api/character/avatar/234.jpeg" alt="a dead morty..."/>
        {statusCode && <h1>Error: {statusCode}</h1>}
        <p>We are sorry! There was an error</p>
        <Link href="/">
            <p>Go back home</p>
        </Link>
      </div>
      </>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Head from 'next/head';

function Locations(rops) {
const [locations, setLocations] = useState({});
useEffect( () => {
    fetch("https://rickandmortyapi.com/api/location")
    .then(res => res.json())
    .then(data => setLocations(data));
}, [])

    return (
        <>
        <Head>
            <title>Rick & Morty page!</title>
        </Head>
        <div className="locations-container">
        <Link href="/"><p>Back to home</p></Link>
        <h2>Rick and Morty Locations</h2>
        <Link href="/characters"><p>Show me Rick and Morty Characters!</p></Link>
        {

            locations.results?.map((location) => (
                <article key={location.id}>
                    <p>Name: {location.name}</p>
                    <p>Dimension: {location.dimension}</p>
                    <p>Type: {location.type}</p>

                </article>))
        }            
        </div>
        </>
    );
}

export default Locations;
import React from 'react';
import Link from 'next/link'
import Head from 'next/head';

function Characters(props) {
    return (
        <>
        <Head>
            <title>Rick & Morty page!</title>
        </Head>
        <div className="locations-container">
        <Link href="/"><p>Back to home</p></Link>
        <h2>Rick and Morty Characters</h2>
        <Link href="/locations"><p>Show me Rick and Morty Locations!</p></Link>
            {
                props.characters.results.map( (character) => (
                    <article key={character.id} className="character-card">
                        <img src={character.image} alt={character.name} height="200px" />
                        <div>
                            <p>{character.name}</p>
                            <p>{character.location.name}</p>
                        </div>
                    </article>
                ))
            }
        </div>
        </>
    );
}

export default Characters;

export async function getServerSideProps(context) {
    const characters  = await fetch("https://rickandmortyapi.com/api/character").then(res => res.json());
    return { props: { characters}}
}
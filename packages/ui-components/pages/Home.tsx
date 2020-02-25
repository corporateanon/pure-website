import * as React from 'react';
import { Artist, ArtistEventList } from '@pure-website/types/bandsInTownTypes';

interface IHomeProps {
    artist: Artist;
    events: ArtistEventList;
}

const Home = ({ artist, events }: IHomeProps) => (
    <>
        <article>
            <h3>{artist.name}</h3>
            <p>
                <img src={artist.thumb_url} />
            </p>
        </article>
        {events.map((event, i) => (
            <article key={i}>
                <p>
                    <strong>{event.description}</strong>
                </p>
                <p>{event.datetime}</p>
            </article>
        ))}
    </>
);

export default Home;

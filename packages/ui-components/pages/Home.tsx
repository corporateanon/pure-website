import * as React from 'react';
import { Artist, ArtistEventList } from '@pure-website/types/bandsInTownTypes';
import SearchInput from '../controls/SearchInput';
import { searchContext } from '../contexts/SearchContext';
const { Provider: SearchProvider } = searchContext;

interface HomeProps {
    artist?: Artist;
    events?: ArtistEventList;
    searchQuery?: string;
    actionSearch?: (q: string) => void;
}

const Home = ({ artist, events, actionSearch, searchQuery }: HomeProps) => {
    return (
        <>
            <SearchProvider
                value={{
                    actionChange: actionSearch,
                    value: searchQuery
                }}
            >
                <div>
                    <SearchInput />
                </div>
                {artist && (
                    <article>
                        <h3>{artist.name}</h3>
                        <p>
                            <img src={artist.thumb_url} />
                        </p>
                    </article>
                )}
                {events &&
                    events.map((event, i) => (
                        <article key={i}>
                            <p>
                                <strong>{event.description}</strong>
                            </p>
                            <p>{event.datetime}</p>
                        </article>
                    ))}
            </SearchProvider>
        </>
    );
};

export default Home;

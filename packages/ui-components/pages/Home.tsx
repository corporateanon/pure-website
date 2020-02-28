import * as React from 'react';
import SearchInput from '../controls/SearchInput';
import { searchContext } from '../contexts/SearchContext';
import { firebaseAuthContext } from '../contexts/FirebaseAuthContext';
import { EpisodateSearchResult } from '@pure-website/types/episodateTypes';
import LoginButton from '../controls/LoginButton';
import { FirebaseAuthEffectProps } from '@pure-website/types/authTypes';

const { Provider: SearchProvider } = searchContext;
const { Provider: FirebaseAuthProvider } = firebaseAuthContext;

interface HomeProps {
    searchResult: EpisodateSearchResult | null;
    searchQuery: string;
    actionSearch: (q: string) => void;
    firebaseAuth: FirebaseAuthEffectProps;
}

const Home = ({
    searchResult,
    actionSearch,
    searchQuery,
    firebaseAuth
}: HomeProps) => {
    return (
        <>
            <FirebaseAuthProvider value={firebaseAuth}>
                <SearchProvider
                    value={{
                        actionChange: actionSearch,
                        value: searchQuery
                    }}
                >
                    <div>
                        <LoginButton />
                    </div>
                    <div>
                        <SearchInput />
                    </div>
                    <div>
                        {searchResult &&
                            searchResult.tv_shows.map((show, i) => {
                                return (
                                    <div key={i}>
                                        <h3>{show.name}</h3>
                                        <div>Starts: {show.start_date}</div>
                                        <div>Ends: {show.end_date}</div>
                                        {show.image_thumbnail_path ? (
                                            <img
                                                src={show.image_thumbnail_path}
                                            />
                                        ) : null}
                                    </div>
                                );
                            })}
                    </div>
                </SearchProvider>
            </FirebaseAuthProvider>
        </>
    );
};

export default Home;

import React, { SFC } from 'react';
import SearchInput from '../controls/SearchInput';
import { searchContext } from '../contexts/SearchContext';
import { firebaseAuthContext } from '../contexts/FirebaseAuthContext';
import { EpisodateSearchResult } from '@pure-website/types/episodateTypes';
import LoginButton from '../controls/LoginButton';
import { FirebaseAuthEffectProps } from '@pure-website/types/authTypes';
import MultiProvider from '../utils/MultiProvider';

const { Provider: SearchProvider } = searchContext;
const { Provider: FirebaseAuthProvider } = firebaseAuthContext;
import { SearchEffectProps } from '@pure-website/types/searchTypes';

interface HomeProps {
    searchResult: EpisodateSearchResult | null;
    search: SearchEffectProps;
    firebaseAuth: FirebaseAuthEffectProps;
}

const Home: SFC<HomeProps> = ({ searchResult, firebaseAuth, search }) => {
    return (
        <>
            <MultiProvider
                providers={[
                    [FirebaseAuthProvider, { value: firebaseAuth }],
                    [
                        SearchProvider,
                        {
                            value: search
                        }
                    ]
                ]}
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
                                        <img src={show.image_thumbnail_path} />
                                    ) : null}
                                </div>
                            );
                        })}
                </div>
            </MultiProvider>
        </>
    );
};

export default Home;

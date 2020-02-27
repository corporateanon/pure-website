import * as React from 'react';
import SearchInput from '../controls/SearchInput';
import { searchContext } from '../contexts/SearchContext';
const { Provider: SearchProvider } = searchContext;
import { EpisodateSearchResult } from '@pure-website/types/episodateTypes';

interface HomeProps {
    searchResult: EpisodateSearchResult | null;
    searchQuery: string;
    actionSearch: (q: string) => void;
}

const Home = ({ searchResult, actionSearch, searchQuery }: HomeProps) => {
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
                <div>
                    {searchResult
                        ? searchResult.tv_shows.map((show, i) => {
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
                        })
                        : null}
                </div>
            </SearchProvider>
        </>
    );
};

export default Home;

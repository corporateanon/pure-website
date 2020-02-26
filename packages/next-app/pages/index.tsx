import Home from '@pure-website/ui-components/pages/Home';
import Episodate from '@pure-website/io/Episodate';
import { useSearch } from '@pure-website/effects/Search';

const HomePage = ({ searchResult }) => {
    const search = useSearch();
    return (
        <Home
            searchResult={searchResult}
            actionSearch={search.actionSearch}
            searchQuery={search.value}
        />
    );
};

HomePage.getInitialProps = async ({ query: { q } }) => {
    const artistName = q;
    const api = new Episodate();

    const searchResult = q ? await api.search(q, 1) : null;

    return {
        searchResult
    };
};

export default HomePage;

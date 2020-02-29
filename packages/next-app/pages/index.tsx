import Home from '@pure-website/ui-components/pages/Home';
import Episodate from '@pure-website/io/Episodate';
import { useSearch } from '@pure-website/effects/Search';
import { useFirebaseAuth } from '@pure-website/effects/FirebaseAuth';
import getConfig from 'next/config';

const HomePage = ({ searchResult }) => {
    const search = useSearch();
    const firebaseAuth = useFirebaseAuth(
        getConfig().publicRuntimeConfig.firebaseConfig
    );
    return (
        <Home
            searchResult={searchResult}
            search={search}
            firebaseAuth={firebaseAuth}
        />
    );
};

HomePage.getInitialProps = async ({ query: { q } }) => {
    const episodate = new Episodate();
    const searchResult = q ? await episodate.search(q, 1) : null;
    return {
        searchResult
    };
};

export default HomePage;

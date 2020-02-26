import Home from '@pure-website/ui-components/pages/Home';
import BandsInTown from '@pure-website/io/BandsInTown';
import { useSearch } from '@pure-website/effects/Search';

const HomePage = ({ artist, events }) => {
    const search = useSearch();
    return (
        <Home
            artist={artist}
            events={events}
            actionSearch={search.actionSearch}
            searchQuery={search.value}
        />
    );
};

HomePage.getInitialProps = async ({ query: { q } }) => {
    const artistName = q;
    const api = new BandsInTown();

    const [artist, events] = q
        ? await Promise.all([
              api.getArtist(artistName),
              api.getEvents(artistName)
          ])
        : [];

    return {
        artist,
        events
    };
};

export default HomePage;

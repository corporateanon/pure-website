import Head from 'next/head';
import Home from '@pure-website/ui-components/pages/Home';
import BandsInTown from '@pure-website/io/BandsInTown';

const HomePage = ({ artist, events }) => (
    <Home artist={artist} events={events} />
);

HomePage.getInitialProps = async () => {
    const api = new BandsInTown();
    const artistName = 'face';
    const artist = await api.getArtist(artistName);
    const events = await api.getEvents(artistName);
    return {
        artist,
        events
    };
};

export default HomePage;

import Example from '@pure-website/ui-components/pages/Example';
import { useFirebaseAuth } from '@pure-website/effects/FirebaseAuth';
import getConfig from 'next/config';

const ExamplePage = ({ searchResult }) => {
    const firebaseAuth = useFirebaseAuth(
        getConfig().publicRuntimeConfig.firebaseConfig
    );
    return <Example firebaseAuth={firebaseAuth} />;
};

export default ExamplePage;

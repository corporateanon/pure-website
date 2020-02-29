import React, { SFC, useEffect, useState } from 'react';
import { firebaseAuthContext } from '../contexts/FirebaseAuthContext';
import { FirebaseAuthEffectProps } from '@pure-website/types/authTypes';
import Blog from '@pure-website/io/Blog';
import LoginButton from '../controls/LoginButton';

const { Provider: FirebaseAuthProvider } = firebaseAuthContext;

export interface ExampleProps {
    firebaseAuth: FirebaseAuthEffectProps;
}

const Example: SFC<ExampleProps> = ({
    firebaseAuth,
    firebaseAuth: { user }
}) => {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        if (user) {
            const blogApi = new Blog(user);
            blogApi.example().then(setResponse);
        } else {
            setResponse(null);
        }
    }, [user]);

    return (
        <FirebaseAuthProvider value={firebaseAuth}>
            <div>
                <LoginButton />
            </div>
            <div>{JSON.stringify(response)}</div>
        </FirebaseAuthProvider>
    );
};
export default Example;

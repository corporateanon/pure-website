import React, { useContext } from 'react';
import { firebaseAuthContext } from '../contexts/FirebaseAuthContext';

const LoginButton = () => {
    const { doAuth, user } = useContext(firebaseAuthContext);

    return (
        <div>
            {user ? (
                <span>{user.displayName}</span>
            ) : (
                <button onClick={doAuth}>Login</button>
            )}
        </div>
    );
};

export default LoginButton;

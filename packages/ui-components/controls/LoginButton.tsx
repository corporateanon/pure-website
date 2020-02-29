import React, { useContext } from 'react';
import { firebaseAuthContext } from '../contexts/FirebaseAuthContext';

const LoginButton = () => {
    const { doAuth, user, logout } = useContext(firebaseAuthContext);

    return (
        <div>
            {user ? (
                <span>
                    {user.displayName}{' '}
                    <a href="javascript:void(0)" onClick={logout}>
                        Logout
                    </a>
                </span>
            ) : (
                <button onClick={doAuth}>Login</button>
            )}
        </div>
    );
};

export default LoginButton;

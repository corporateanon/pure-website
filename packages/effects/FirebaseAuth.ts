import * as firebase from 'firebase/app';
import { useState, useEffect } from 'react';
import { FirebaseAuthEffectProps } from '@pure-website/types/authTypes';

const isInitialized = Symbol('firebaseIsInitialized');

function initializeFirebase(firebaseConfig: any) {
    if (!process.browser) {
        return;
    }

    const win: any = window;
    if (win[isInitialized]) {
        return;
    }

    win[isInitialized] = true;

    require('firebase/analytics');
    require('firebase/auth');

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}

export const useFirebaseAuth = (
    firebaseConfig: any
): FirebaseAuthEffectProps => {
    const [user, setUser] = useState<firebase.User | null>(null);

    useEffect(() => {
        initializeFirebase(firebaseConfig);
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setUser(user);
                console.log(user);
            } else {
                setUser(null);
            }
        });
    }, []);

    return {
        user,
        doAuth: async () => {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider);
        }
    };
};

import * as firebase from 'firebase/app';
import { createContext } from 'react';
import { FirebaseAuthEffectProps } from '@pure-website/types/authTypes';

const firebaseAuthContext = createContext<FirebaseAuthEffectProps>({
    user: null,
    doAuth: async () => {}
});

export { firebaseAuthContext };

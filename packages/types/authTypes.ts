import * as firebase from 'firebase/app';

export type AuthUser = firebase.User;

export interface FirebaseAuthEffectProps {
    user: firebase.User | null;
    doAuth: () => Promise<void>;
    logout: () => Promise<void>;
}

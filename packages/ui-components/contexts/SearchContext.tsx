import { createContext } from 'react';

export interface SearchContextProps {
    actionChange: (q: string) => void;
    value: string | null;
}

const searchContext = createContext<SearchContextProps>({
    actionChange: () => {},
    value: ''
});

export { searchContext };

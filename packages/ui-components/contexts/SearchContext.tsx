import { createContext } from 'react';
import { SearchEffectProps } from '@pure-website/types/searchTypes';

const searchContext = createContext<SearchEffectProps>({
    onSearch: () => {},
    value: ''
});

export { searchContext };

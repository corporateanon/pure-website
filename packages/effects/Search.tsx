import { useRouter } from 'next/router';
import { isArray } from 'lodash';
import { SearchEffectProps } from '@pure-website/types/searchTypes';

export const useSearch = (): SearchEffectProps => {
    const {
        replace,
        query: { q }
    } = useRouter();

    const value = isArray(q) ? q[0] : q;

    return {
        onSearch: (q: string) => {
            console.log('Search:', q);
            replace({ pathname: '/', query: { q } });
        },
        value
    };
};

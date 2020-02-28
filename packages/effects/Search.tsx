import { useRouter } from 'next/router';
import { isArray } from 'lodash';

export interface Search {
    actionSearch: (q: string) => void;
    value: string | null;
}

export const useSearch = (): Search => {
    const {
        replace,
        query: { q }
    } = useRouter();

    const value = isArray(q) ? q[0] : q;

    return {
        actionSearch: (q: string) => {
            console.log('Search:', q);
            replace({ pathname: '/', query: { q } });
        },
        value
    };
};

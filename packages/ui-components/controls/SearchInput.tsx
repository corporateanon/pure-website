import React, { useContext, useState, useCallback } from 'react';
import { debounce } from 'lodash';
import { searchContext } from '../contexts/SearchContext';

export interface SearchInputProps {
    onChange: (value: string) => void;
}

const SearchInput = () => {
    const { onSearch, value } = useContext(searchContext);

    const [localValue, setLocalValue] = useState(value);
    const debouncedChange = useCallback(debounce(onSearch, 400), [onSearch]);

    const onChange = useCallback(
        ({ target: { value } }) => {
            setLocalValue(value);
            debouncedChange(value);
        },
        [onSearch]
    );

    return <input type="text" value={localValue || ''} onChange={onChange} />;
};

export default SearchInput;

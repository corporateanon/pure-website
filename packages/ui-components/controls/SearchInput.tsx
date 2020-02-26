import React, { useContext, useState, useCallback } from 'react';
import { debounce } from 'lodash';
import { searchContext } from '../contexts/SearchContext';

export interface SearchInputProps {
    onChange: (value: string) => void;
}

const SearchInput = () => {
    const { actionChange, value } = useContext(searchContext);

    const [localValue, setLocalValue] = useState(value);
    const debouncedChange = useCallback(debounce(actionChange, 400), [
        actionChange
    ]);

    const onChange = useCallback(
        ({ target: { value } }) => {
            setLocalValue(value);
            debouncedChange(value);
        },
        [actionChange]
    );

    return <input type="text" value={localValue || ''} onChange={onChange} />;
};

export default SearchInput;

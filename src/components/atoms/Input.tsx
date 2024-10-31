import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setInputValue } from '../../stores/slices/inputSlice';

interface InputProps {
    id: string;
    label: string;
}

const Input: React.FC<InputProps> = ({ id, label }) => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setQuery(newValue);
        dispatch(setInputValue({ key: id, value: newValue}));
    };

    return (
        <>
            <input
                type="text"
                value={query}
                onChange={ handleChange }
                className="border px-2 py-2 my-2 w-3/4"
                placeholder={ label }
            />
        </>
    );
};

export default Input;
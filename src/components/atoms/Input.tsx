import React, { useState } from 'react';

interface InputProps {
  label: string;
}

const Input: React.FC<InputProps> = ({ label }) => {
    const [query, setQuery] = useState('');

    return (
        <>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border px-2 py-2 my-2 w-3/4"
                placeholder={ label }
            />
        </>
    );
};

export default Input;
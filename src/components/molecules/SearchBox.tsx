import React, { useState } from 'react';
import Button from '../atoms/Button';

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  return (
    <div className="flex">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border px-2 py-1 mr-2"
        placeholder="Search..."
      />
      <Button label="Search" onClick={() => onSearch(query)} />
    </div>
  );
};

export default SearchBox;

import { ChangeEvent, FormEvent, useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(query);
    
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-screen max-w-3xl text-black"
    >
      <input
        type="text"
        className="border border-gray-300 rounded-1 py-2 px-4 w-full focus:outline-none focus:border-blue-500"
        value={query}
        onChange={handleChange}
      />
      <button type="submit" className="bg-red-600 text-white py-2 px-6 rounded-r hover:bg-gray-600 transition-all">Search</button>
    </form>
  );
}

export default SearchBar;

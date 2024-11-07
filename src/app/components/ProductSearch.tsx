import { FormEvent } from 'react';

type SearchProps = {
  query: string;
  setQuery: (query: string) => void;
  handleSearch: (e: FormEvent<HTMLFormElement>) => void;
};

const ProductSearch = ({ query, setQuery, handleSearch }: SearchProps) => {
  return (
    <form className="text-center my-4" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        className="px-2"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="mx-2 bg-white px-2 rounded-md">
        Search
      </button>
    </form>
  );
};

export default ProductSearch;

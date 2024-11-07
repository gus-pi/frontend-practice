'use client';

import { Product } from '@/lib/types';
import { FormEvent, useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import ProductSearch from './components/ProductSearch';
import useGetQuery from './hooks/useGetQuery';

export default function Home() {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const { products } = useGetQuery(search, category);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(query);
  };

  return (
    <main>
      <h1 className="text-center font-bold my-5 text-3xl">Products</h1>

      <ProductSearch
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />

      <div className="flex flex-col items-center my-5">
        <label htmlFor="category">Select a Category</label>
        <select
          name="categoru"
          onChange={(e) => setCategory(e.target.value)}
          className="bg-white px-2 rounded-md"
        >
          <option value="0">None</option>
          <option value="1">Clothes</option>
          <option value="2">Technology</option>
        </select>
      </div>

      <ul className="flex flex-wrap gap-3 mx-5">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

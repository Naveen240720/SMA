import { useState, useMemo } from 'react';

export function useSearch<T>(
  items: T[],
  searchFields: (keyof T)[],
  defaultQuery = ''
) {
  const [query, setQuery] = useState(defaultQuery);

  const filteredItems = useMemo(() => {
    if (!query) return items;

    const lowerQuery = query.toLowerCase();
    return items.filter((item) =>
      searchFields.some((field) => {
        const value = item[field];
        return String(value).toLowerCase().includes(lowerQuery);
      })
    );
  }, [items, query, searchFields]);

  return {
    query,
    setQuery,
    filteredItems
  };
}
import { useState, useEffect } from 'react';
import { client } from '../sanity/client';

export function useSanity(query, params = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(query, params)
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [query]);

  return { data, loading };
}

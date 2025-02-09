import { useCallback, useState } from 'react';
import { captureException } from '@sentry/nextjs';

export default function <T>() {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async (url: string, options = {}) => {
    if (loading) return;

    setLoading(true);
    setError(null);

    let response = null;

    try {
      response = await fetch(url, {
        mode: 'cors',
        credentials: 'include',
        headers: {
          'X-DA-Auth': 'true',
        },
        ...options,
      });
      const result = await response.json();
      setData(result);
    } catch (e) {
      captureException(e);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, error, loading, execute };
}

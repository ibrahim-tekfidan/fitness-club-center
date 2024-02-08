import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

const useData = <T>(endpoint: string, deps?: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<T[]>(endpoint, {
        signal: controller.signal,
      })
      .then(res => {
        setData(res.data);
        setError('');
      })
      .catch((err: Error) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, [deps]);

  return { data, error };
};

export default useData;

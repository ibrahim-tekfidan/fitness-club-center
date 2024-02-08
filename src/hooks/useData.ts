import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';

interface FetchResponse<T> {
  items: T[];
}

const useData = <T>(
  endpoint: string,
  axiosConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');

  useEffect(
    () => {
      const controller = new AbortController();

      apiClient
        .get<T[]>(endpoint, {
          signal: controller.signal,
          params: { ...axiosConfig },
        })
        .then(res => setData(res.data))
        .catch((err: Error) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
        });
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error };
};

export default useData;

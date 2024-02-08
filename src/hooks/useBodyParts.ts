import { CanceledError } from 'axios';
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';

const useBodyParts = () => {
  const [bodyParts, setBodyParts] = useState<string[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<string[]>('bodyPartList', { signal: controller.signal })
      .then(res => setBodyParts(res.data))
      .catch((err: Error) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { bodyParts, error };
};

export default useBodyParts;

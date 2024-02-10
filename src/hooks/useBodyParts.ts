import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-exercise';
import bodyParts from '../data/bodyParts';

const useBodyParts = () => {
  return useQuery<string[]>({
    queryKey: ['bodyParts'],
    queryFn: () =>
      apiClient.get<string[]>('/bodyPartList').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: bodyParts,
  });
};

export default useBodyParts;

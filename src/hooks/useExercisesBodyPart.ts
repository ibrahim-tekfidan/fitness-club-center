import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { Exercise } from './useExercises';

const useExercisesBodyPart = (bodyPart: string | undefined) => {
  return useQuery<Exercise[], Error>({
    queryKey: [bodyPart],
    queryFn: () =>
      apiClient.get<Exercise[]>(`/bodyPart/${bodyPart}`).then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useExercisesBodyPart;

import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { Exercise } from './useExercises';

const useExercisesBodyPart = (
  bodyPart: string | undefined,
  pageSize: number,
  page: number
) => {
  return useQuery<Exercise[], Error>({
    queryKey: ['ExerciseBodyPart', bodyPart, page],
    queryFn: () =>
      apiClient
        .get<Exercise[]>(`/bodyPart/${bodyPart}`, {
          params: {
            offset: (page - 1) * pageSize,
            limit: pageSize,
          },
        })
        .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useExercisesBodyPart;

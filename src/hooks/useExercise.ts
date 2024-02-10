import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-exercise';
import { Exercise } from './useExercises';

const useExercise = (id: string) => {
  return useQuery<Exercise>({
    queryKey: ['exercise', id],
    queryFn: () =>
      apiClient.get<Exercise>('/exercise/' + id).then(res => res.data),
  });
};

export default useExercise;

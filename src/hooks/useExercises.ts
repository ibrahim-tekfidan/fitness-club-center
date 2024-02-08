import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import useExerciseQueryStroe from '../store';

export interface Exercise {
  id: number;
  name: string;
  bodyPart: string;
  gifUrl: string;
  target: string;
}

const useExercises = () => {
  const { bodyPart, equipment, searchText } = useExerciseQueryStroe(
    s => s.exerciseQuery
  );

  let endpoint = '';
  if (bodyPart) endpoint = `/bodyPart/${bodyPart}`;
  if (equipment) endpoint = `/equipment/${equipment}`;
  if (searchText) endpoint = `/name/${searchText}`;

  return useQuery<Exercise[], Error>({
    queryKey: endpoint ? ['exercises', endpoint] : ['exercises'],
    queryFn: () => apiClient.get<Exercise[]>(endpoint).then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useExercises;

import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-exercise';
import useExerciseQueryStore from '../store';

export interface Exercise {
  id: number;
  name: string;
  bodyPart: string;
  gifUrl: string;
  target: string;
  equipment: string;
  secondaryMuscles: string;
  instructions: string[];
}

const useExercises = (pageSize: number) => {
  const { bodyPart, equipment, searchText, page } = useExerciseQueryStore(
    s => s.exerciseQuery
  );

  let endpoint = '';
  if (bodyPart) endpoint = `/bodyPart/${bodyPart}`;
  if (equipment) endpoint = `/equipment/${equipment}`;
  if (searchText) endpoint = `/name/${searchText}`;

  return useQuery<Exercise[], Error>({
    queryKey: endpoint || page ? ['exercises', endpoint, page] : ['exercises'],
    queryFn: () =>
      apiClient
        .get<Exercise[]>(endpoint, {
          params: {
            offset: (page - 1) * pageSize,
            limit: pageSize,
          },
        })
        .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useExercises;

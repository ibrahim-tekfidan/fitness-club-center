import { ExerciseQuery } from '../store';
import useData from './useData';

export interface Exercise {
  id: number;
  name: string;
  bodyPart: string;
  gifUrl: string;
  target: string;
}

const useExercises = ({ bodyPart, equipment, searchText }: ExerciseQuery) => {
  if (bodyPart) return useData<Exercise>(`/bodyPart/${bodyPart}`, bodyPart);
  if (equipment) return useData<Exercise>(`/equipment/${equipment}`, equipment);
  if (searchText) return useData<Exercise>(`/name/${searchText}`, searchText);

  return useData<Exercise>('', bodyPart);
};

export default useExercises;

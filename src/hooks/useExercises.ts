import useData from './useData';

export interface Exercise {
  id: number;
  name: string;
  bodyPart: string;
  gifUrl: string;
  target: string;
}

const useExercises = () => useData<Exercise>('');

export default useExercises;

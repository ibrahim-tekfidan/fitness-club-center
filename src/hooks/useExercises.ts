import useData from './useData';

export interface Exercise {
  id: number;
  name: string;
  bodyPart: string;
  gifUrl: string;
  target: string;
}

const useExercises = (selectedBodyPart = '') => {
  if (selectedBodyPart)
    return useData<Exercise>(`/bodyPart/${selectedBodyPart}`, selectedBodyPart);

  return useData<Exercise>('', selectedBodyPart);
};

export default useExercises;

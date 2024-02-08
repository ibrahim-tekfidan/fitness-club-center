import useData from './useData';

export interface Exercise {
  id: number;
  name: string;
  bodyPart: string;
  gifUrl: string;
  target: string;
}

const useExercises = (
  selectedBodyPart = '',
  selectedEquipment = '',
  searchText = ''
) => {
  if (selectedBodyPart)
    return useData<Exercise>(`/bodyPart/${selectedBodyPart}`, selectedBodyPart);
  if (selectedEquipment)
    return useData<Exercise>(
      `/equipment/${selectedEquipment}`,
      selectedEquipment
    );
  if (searchText) return useData<Exercise>(`/name/${searchText}`, searchText);

  return useData<Exercise>('', selectedBodyPart);
};

export default useExercises;

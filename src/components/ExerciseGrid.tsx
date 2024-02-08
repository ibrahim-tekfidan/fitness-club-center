import { Text, SimpleGrid, Center, Box } from '@chakra-ui/react';
import ExerciseCard from './ExerciseCard';
import useExercises from '../hooks/useExercises';
import ErrorMessage from './ErrorMessage';

interface Props {
  selectedBodyPart: string;
  selectedEquipment: string;
  searchText: string;
}

const ExerciseGrid = ({
  selectedBodyPart,
  selectedEquipment,
  searchText,
}: Props) => {
  const { data: exercises, error } = useExercises(
    selectedBodyPart,
    selectedEquipment,
    searchText
  );

  if (error) return;

  if (exercises.length === 0)
    return (
      <ErrorMessage>
        No results found for '{searchText}' 😔. Please make sure you entered the
        exercise name correctly 🥳.
      </ErrorMessage>
    );

  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={[4, 6, 8, 8]}>
      {exercises?.map(exercise => (
        <ExerciseCard exercise={exercise} key={exercise.id} />
      ))}
    </SimpleGrid>
  );
};

export default ExerciseGrid;

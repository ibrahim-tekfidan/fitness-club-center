import { Text, SimpleGrid, Center, Box } from '@chakra-ui/react';
import ExerciseCard from './ExerciseCard';
import useExercises from '../hooks/useExercises';

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

  if (error)
    return (
      <Center>
        <Text fontSize={['lg', 'xl', '2xl']}>{error}</Text>
      </Center>
    );

  if (exercises.length === 0)
    return (
      <Center>
        <Text fontSize={['lg', 'xl', '2xl']}>
          No results found for '{searchText}' 😔. Please make sure you entered
          the exercise name correctly 🥳.
        </Text>
      </Center>
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

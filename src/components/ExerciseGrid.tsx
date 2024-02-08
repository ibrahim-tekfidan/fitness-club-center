import { Text, SimpleGrid, Center, Box } from '@chakra-ui/react';
import ExerciseCard from './ExerciseCard';
import useExercises from '../hooks/useExercises';

const ExerciseGrid = () => {
  const { exercises, error } = useExercises();

  if (error)
    return (
      <Center>
        <Text fontSize={['lg', 'xl', '2xl']}>{error}</Text>
      </Center>
    );

  return (
    <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={[4, 6, 8, 8]}>
      {exercises?.map(exercise => (
        <ExerciseCard exercise={exercise} key={exercise.id} />
      ))}
    </SimpleGrid>
  );
};

export default ExerciseGrid;

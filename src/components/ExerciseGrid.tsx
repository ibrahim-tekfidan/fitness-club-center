import { SimpleGrid } from '@chakra-ui/react';
import useExercises from '../hooks/useExercises';
import useExerciseQueryStroe from '../store';
import ErrorMessage from './ErrorMessage';
import ExerciseCard from './ExerciseCard';

const ExerciseGrid = () => {
  const searchText = useExerciseQueryStroe(s => s.exerciseQuery.searchText);
  const { data: exercises, error, isLoading } = useExercises();

  if (error) return <ErrorMessage>{error.message}</ErrorMessage>;

  if (exercises?.length === 0 && searchText?.length !== 0)
    return (
      <ErrorMessage>
        No results found for '{searchText}' 😔. Please make sure you entered the
        exercise name correctly 🥳.
      </ErrorMessage>
    );

  return (
    <SimpleGrid columns={[2, 2, 3, 4, 5]} spacing={[3, 4, 5, 6]}>
      {exercises?.map(exercise => (
        <ExerciseCard exercise={exercise} key={exercise.id} />
      ))}
    </SimpleGrid>
  );
};

export default ExerciseGrid;

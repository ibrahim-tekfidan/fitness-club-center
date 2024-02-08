import { SimpleGrid } from '@chakra-ui/react';
import { ExerciseQuery } from '../App';
import useExercises from '../hooks/useExercises';
import ErrorMessage from './ErrorMessage';
import ExerciseCard from './ExerciseCard';

interface Props {
  exerciseQuery: ExerciseQuery;
}

const ExerciseGrid = ({ exerciseQuery }: Props) => {
  const { data: exercises, error } = useExercises(exerciseQuery);

  if (error) return;

  if (exercises.length === 0)
    return (
      <ErrorMessage>
        No results found for '{exerciseQuery.searchText}' 😔. Please make sure
        you entered the exercise name correctly 🥳.
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

import { Center, SimpleGrid, Spinner } from '@chakra-ui/react';
import useExercises from '../hooks/useExercises';
import useExerciseQueryStore from '../store';
import ErrorMessage from './ErrorMessage';
import ExerciseCard from './ExerciseCard';
import Pagination from './Pagination';

const ExerciseGrid = () => {
  const pageSize = 20;
  const { data: exercises, error, isLoading } = useExercises(pageSize);
  const searchText = useExerciseQueryStore(s => s.exerciseQuery.searchText);
  const page = useExerciseQueryStore(s => s.exerciseQuery.page);
  const setPage = useExerciseQueryStore(s => s.setPage);
  const hasNextPage = exercises !== undefined && exercises.length === pageSize;

  if (error) return <ErrorMessage>{error.message}</ErrorMessage>;

  if (exercises?.length === 0 && searchText?.length !== 0)
    return (
      <ErrorMessage>
        No results found for '{searchText}' 😔. Please make sure you entered the
        exercise name correctly 🥳.
      </ErrorMessage>
    );

  return (
    <>
      {isLoading && (
        <Center paddingY={'128px'}>
          <Spinner size={'xl'} />
        </Center>
      )}
      <SimpleGrid columns={[2, 2, 3, 4, 5]} spacing={[3, 4, 5, 6]}>
        {exercises?.map(exercise => (
          <ExerciseCard exercise={exercise} key={exercise.id} />
        ))}
      </SimpleGrid>
      <Pagination
        elementId={'FilterExercise'}
        page={page}
        onPage={setPage}
        hasNextPage={hasNextPage}
        isLoading={isLoading}
      />
    </>
  );
};

export default ExerciseGrid;

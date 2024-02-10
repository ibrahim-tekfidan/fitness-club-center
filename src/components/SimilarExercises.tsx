import { Box, Center, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import useExercisesBodyPart from '../hooks/useExercisesBodyPart';
import ExerciseCard from './ExerciseCard';
import Pagination from './Pagination';
import { useState } from 'react';

interface Props {
  searchParams: URLSearchParams;
}

const SimilarExercises = ({ searchParams }: Props) => {
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const { data: exercises, isLoading } = useExercisesBodyPart(
    searchParams.get('bodyPart')!,
    pageSize,
    page
  );
  const hasNextPage = exercises !== undefined && exercises.length === pageSize;

  return (
    <Box mt={[8, 10, 12, 24]}>
      <Heading
        mb={['16px', '20px', '24px', '32px']}
        bgGradient={'linear(to-r, #2B6CB0, #90CDF4)'}
        bgClip="text"
      >
        Similar body part exercises
      </Heading>
      {isLoading && (
        <Center paddingY={'128px'}>
          <Spinner size={'xl'} />
        </Center>
      )}
      <SimpleGrid columns={[2, 2, 3, 4, 5]} spacing={[3, 4, 5, 6]}>
        {exercises?.map(exercise => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </SimpleGrid>
      <Pagination
        page={page}
        onPage={(number: number) => setPage(p => p + number)}
        hasNextPage={hasNextPage}
        isLoading={isLoading}
      />
    </Box>
  );
};

export default SimilarExercises;

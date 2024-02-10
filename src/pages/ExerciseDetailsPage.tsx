import { Box } from '@chakra-ui/react';
import { useParams, useSearchParams } from 'react-router-dom';
import ExerciseInstructions from '../components/ExerciseInstructions';
import SimilarExercises from '../components/SimilarExercises';
import useExercise from '../hooks/useExercise';

const ExerciseDetailsPage = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const { data: exercise } = useExercise(params.id!);

  return (
    <Box
      paddingX={['16px', '20px', '24px', '32px']}
      mt={['32px', '32px', '48px']}
    >
      <ExerciseInstructions exercise={exercise!} />
      <SimilarExercises searchParams={searchParams} />
    </Box>
  );
};

export default ExerciseDetailsPage;

import { Box } from '@chakra-ui/react';
import ExerciseInstructions from '../components/ExerciseInstructions';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetailsPage = () => {
  return (
    <Box
      paddingX={['16px', '20px', '24px', '32px']}
      mt={['32px', '32px', '48px']}
    >
      <ExerciseInstructions />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetailsPage;

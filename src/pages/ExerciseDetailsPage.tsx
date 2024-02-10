import { useParams } from 'react-router-dom';
import ExerciseInstructions from '../components/ExerciseInstructions';
import { Box } from '@chakra-ui/react';

const ExerciseDetailsPage = () => {
  const { id } = useParams();
  return (
    <Box
      paddingX={['16px', '20px', '24px', '32px']}
      mt={['32px', '32px', '48px']}
    >
      <ExerciseInstructions exerciseId={id!} />
    </Box>
  );
};

export default ExerciseDetailsPage;

import { Button } from '@chakra-ui/react';
import useExerciseQueryStroe from '../store';

const ResetFilters = () => {
  const reset = useExerciseQueryStroe(s => s.reset);

  return (
    <Button
      colorScheme="blue"
      size={{ base: 'md', lg: 'lg' }}
      onClick={() => reset()}
    >
      Reset Filters
    </Button>
  );
};

export default ResetFilters;

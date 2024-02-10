import { Button } from '@chakra-ui/react';
import useExerciseQueryStore from '../store';

const ResetFilters = () => {
  const reset = useExerciseQueryStore(s => s.reset);

  return (
    <Button
      colorScheme="blue"
      size={{ base: 'sm', md: 'md', lg: 'lg' }}
      onClick={() => reset()}
    >
      Reset Filters
    </Button>
  );
};

export default ResetFilters;

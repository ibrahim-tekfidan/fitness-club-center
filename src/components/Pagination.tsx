import { Badge, Button, HStack } from '@chakra-ui/react';
import useExerciseQueryStroe from '../store';

interface Props {
  hasNextPage: boolean;
  isLoading: boolean;
}

const Pagination = ({ hasNextPage, isLoading }: Props) => {
  const page = useExerciseQueryStroe(s => s.exerciseQuery.page);
  const setPage = useExerciseQueryStroe(s => s.setPage);

  console.log('render', page);

  return (
    <HStack justifyContent={'end'} spacing={[2, 3, 4]} marginTop={[3, 4, 5, 6]}>
      <Button
        colorScheme="blue"
        size={{ base: 'sm', md: 'md', lg: 'lg' }}
        disabled={page === 1}
        onClick={() => {
          page !== 1 && setPage(-1);
        }}
      >
        &larr; Previous
      </Button>
      <Button
        colorScheme="blue"
        onClick={() => {
          hasNextPage && setPage(1);
        }}
        size={{ base: 'sm', md: 'md', lg: 'lg' }}
      >
        Next &rarr;
      </Button>
      <Badge
        colorScheme={'blue'}
        paddingX={[3, 3, 3, 4]}
        paddingY={[1, 1, 2, 2]}
        borderRadius={[3, 4, 5, 6]}
      >
        {isLoading ? '' : hasNextPage ? page : 'max'}
      </Badge>
    </HStack>
  );
};

export default Pagination;

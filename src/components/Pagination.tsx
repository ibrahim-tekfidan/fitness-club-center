import { Badge, Button, HStack } from '@chakra-ui/react';
import useExerciseQueryStroe from '../store';

interface Props {
  page: number;
  onPage: (number: number) => void;
  hasNextPage: boolean;
  isLoading: boolean;
  elementId?: string;
}

const Pagination = ({
  page,
  onPage,
  hasNextPage,
  isLoading,
  elementId,
}: Props) => {
  return (
    <HStack justifyContent={'end'} spacing={[2, 3, 4]} marginTop={[3, 4, 5, 6]}>
      <Button
        colorScheme="blue"
        size={{ base: 'sm', md: 'md', lg: 'lg' }}
        disabled={page === 1}
        onClick={() => {
          page !== 1 && onPage(-1);
          if (elementId && page !== 1) {
            const element = document.getElementById(elementId);
            element?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        &larr; Previous
      </Button>
      <Button
        colorScheme="blue"
        onClick={() => {
          hasNextPage && onPage(1);
          if (elementId && hasNextPage) {
            const element = document.getElementById(elementId);
            element?.scrollIntoView({ behavior: 'smooth' });
          }
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

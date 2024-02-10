import { Heading } from '@chakra-ui/react';
import useExerciseQueryStore from '../store';

const FilterHeading = () => {
  const { bodyPart, equipment, searchText } = useExerciseQueryStore(
    s => s.exerciseQuery
  );

  const filterHeading = (bodyPart || equipment || searchText)?.toUpperCase();

  return (
    <>
      {filterHeading && (
        <Heading
          fontSize={['lg', 'lg', 'xl', '2xl']}
          bgGradient={'linear(to-r, #2B6CB0, #90CDF4)'}
          bgClip="text"
        >
          Filtered by: {filterHeading}
        </Heading>
      )}
    </>
  );
};

export default FilterHeading;

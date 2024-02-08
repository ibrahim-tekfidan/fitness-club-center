import { Heading, useColorMode } from '@chakra-ui/react';
import { ExerciseQuery } from '../App';

interface Props {
  exerciseQuery: ExerciseQuery;
}

const FilterHeading = ({ exerciseQuery }: Props) => {
  const { colorMode } = useColorMode();
  const { selectedBodyPart, selectedEquipment, searchText } = exerciseQuery;

  const filterHeading = (
    selectedBodyPart ||
    selectedEquipment ||
    searchText
  )?.toUpperCase();

  if (Object.keys(exerciseQuery).length !== 0)
    return (
      <Heading
        fontSize={['lg', 'lg', 'xl', '2xl']}
        bgGradient={'linear(to-r, #2B6CB0, #90CDF4)'}
        bgClip="text"
      >
        Filtered by: {filterHeading}
      </Heading>
    );
};

export default FilterHeading;

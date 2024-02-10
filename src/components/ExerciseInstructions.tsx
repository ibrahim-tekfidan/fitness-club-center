import {
  SimpleGrid,
  Image,
  Heading,
  OrderedList,
  ListItem,
  Center,
  Box,
  useColorMode,
} from '@chakra-ui/react';
import ExerciseKeyWords from './ExerciseKeyWords';
import { Exercise } from '../hooks/useExercises';

interface Props {
  exercise: Exercise;
}

const ExerciseInstructions = ({ exercise }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <SimpleGrid alignItems={'center'} columns={{ base: 1, md: 2 }}>
      <Box>
        <Heading
          bgGradient={'linear(to-r, #2B6CB0, #90CDF4)'}
          bgClip="text"
          mb={['16px', '20px', '24px', '32px']}
          fontSize={['xl', '3xl', '4xl', '5xl']}
        >
          {exercise?.name.toUpperCase()}
        </Heading>

        <OrderedList
          color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
          fontSize={['md', 'md', 'lg', 'xl']}
          paddingBottom={{ lg: '32px' }}
          spacing={2}
        >
          {exercise?.instructions.map((instruction, index) => (
            <ListItem key={index}>{instruction}</ListItem>
          ))}
        </OrderedList>
        <ExerciseKeyWords exercise={exercise!} />
      </Box>
      <Box>
        <Center>
          <Image
            borderRadius={'10px'}
            width={['50%', '50%', '80%', '63%']}
            src={exercise?.gifUrl}
          />
        </Center>
      </Box>
    </SimpleGrid>
  );
};

export default ExerciseInstructions;

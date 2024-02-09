import {
  Box,
  Center,
  HStack,
  Heading,
  Image,
  ListItem,
  OrderedList,
  SimpleGrid,
  VStack,
  useColorMode,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useExercise from '../hooks/useExercise';
import bodyPartLogo from '../assets/icons/body-part.png';
import targetLogo from '../assets/icons/target.png';
import equipmentPartLogo from '../assets/icons/equipment.png';

export const ExerciseDetailsPage = () => {
  const { id } = useParams();
  const { data: exercise } = useExercise(id!);
  const { colorMode } = useColorMode();
  console.log(exercise);
  return (
    <SimpleGrid
      paddingX={['16px', '20px', '24px', '32px']}
      mt={['32px', '32px', '48px']}
      alignItems={'center'}
      columns={{ base: 1, md: 2 }}
    >
      <Box>
        <Heading
          bgGradient={'linear(to-r, #2B6CB0, #90CDF4)'}
          bgClip="text"
          mb={['16px', '20px', '24px', '32px']}
          fontSize={['xl', '3xl', '4xl', '5xl']}
        >
          {exercise?.name}
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

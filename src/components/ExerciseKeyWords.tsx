import { Text, Box, Heading, HStack, useColorMode } from '@chakra-ui/react';
import { FaRunning } from 'react-icons/fa';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { IoMdFitness } from 'react-icons/io';
import { Exercise } from '../hooks/useExercises';

interface Props {
  exercise: Exercise;
}

const ExerciseKeyWords = ({ exercise }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <Box mt={[6, 6, 8, 8]}>
      <Heading
        bgGradient={'linear(to-r, #2B6CB0, #90CDF4)'}
        bgClip="text"
        fontSize={{ base: '2xl', md: '2xl', lg: '3xl' }}
      >
        Key Words:
      </Heading>
      <HStack
        justifyContent={'space-around'}
        mt={[4, 4, 6, 6]}
        mb={[4, 6, 8, 8]}
      >
        <HStack>
          <GiWeightLiftingUp
            fontSize={'32px'}
            color={colorMode === 'dark' ? '#90CDF4' : '#2B6CB0'}
          />
          <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight={600}>
            {exercise?.equipment.toUpperCase()}
          </Text>
        </HStack>
        <HStack>
          <IoMdFitness
            fontSize={'32px'}
            color={colorMode === 'dark' ? '#90CDF4' : '#2B6CB0'}
          />
          <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight={600}>
            {exercise?.bodyPart.toUpperCase()}
          </Text>
        </HStack>
        <HStack>
          <FaRunning
            fontSize={'32px'}
            color={colorMode === 'dark' ? '#90CDF4' : '#2B6CB0'}
          />
          <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight={600}>
            {exercise?.target.toUpperCase()}
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
};

export default ExerciseKeyWords;

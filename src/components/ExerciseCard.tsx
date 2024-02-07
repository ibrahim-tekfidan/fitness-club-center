import {
  Image,
  Card,
  CardBody,
  Heading,
  HStack,
  Badge,
  Divider,
} from '@chakra-ui/react';
import { Exercise } from '../hooks/useExercises';

interface Props {
  exercise: Exercise;
}

const ExerciseCard = ({ exercise }: Props) => {
  return (
    <Card
      cursor={'pointer'}
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform .15s ease-in',
        boxShadow: 'lg',
      }}
      boxShadow={'md'}
      borderRadius={10}
      overflow={'hidden'}
    >
      <Image src={exercise.gifUrl} />
      <Divider />
      <CardBody>
        <HStack>
          <Badge paddingX={2} borderRadius={6} mb={[1, 2, 3]} colorScheme="red">
            {exercise.target}
          </Badge>
          <Badge
            paddingX={2}
            borderRadius={6}
            mb={[1, 2, 3]}
            colorScheme="blue"
          >
            {exercise.bodyPart}
          </Badge>
        </HStack>
        <Heading
          paddingTop={2}
          textTransform={'uppercase'}
          fontSize={['lg', 'lg', 'xl', 'xl']}
        >
          {exercise.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default ExerciseCard;

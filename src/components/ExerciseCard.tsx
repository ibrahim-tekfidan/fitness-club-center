import {
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Exercise } from '../hooks/useExercises';
import CategoryBadge from './CategoryBadge';

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
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <Link
        to={`/exercise/${exercise.id}?bodyPart=${exercise.bodyPart}&target=${exercise.target}&exerciseName=${exercise.name}`}
      >
        <Image src={exercise.gifUrl} />
        <Divider />
        <CardBody overflow={'auto'}>
          <Stack display={'flex'} flexDirection={{ base: 'column', md: 'row' }}>
            <CategoryBadge color={'blue'}>{exercise.bodyPart}</CategoryBadge>
            <CategoryBadge color="red">{exercise.target}</CategoryBadge>
          </Stack>
          <Divider mt={[1, 2, 3, 3]} />
          <Heading
            paddingTop={[3, 4, 5, 5]}
            textTransform={'uppercase'}
            fontSize={['sm', 'md', 'lg', 'lg']}
            fontWeight={{ base: 600, md: 700 }}
          >
            {exercise.name}
          </Heading>
        </CardBody>
      </Link>
    </Card>
  );
};

export default ExerciseCard;

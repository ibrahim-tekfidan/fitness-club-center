import { Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useExercise from '../hooks/useExercise';

const ExerciseDetailsPage = () => {
  const { id } = useParams();
  const { data: exercise } = useExercise(id!);

  return <Heading>{exercise?.name}</Heading>;
};

export default ExerciseDetailsPage;

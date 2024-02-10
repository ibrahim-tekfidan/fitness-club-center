import { List, ListItem } from '@chakra-ui/react';
import { Exercise } from '../hooks/useExercises';
import useExercisesBodyPart from '../hooks/useExercisesBodyPart';

interface Props {
  exercise: Exercise | undefined;
  searchParams: URLSearchParams;
}

const SimilarExercises = ({ exercise, searchParams }: Props) => {
  const { data: SimilarBodyPartExercises } = useExercisesBodyPart(
    searchParams.get('bodyPart')!
  );
  return (
    <List>
      {SimilarBodyPartExercises?.map(exercise => (
        <ListItem key={exercise.id}>{exercise.name}</ListItem>
      ))}
    </List>
  );
};

export default SimilarExercises;

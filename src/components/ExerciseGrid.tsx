import { SimpleGrid, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import ExerciseCard from './ExerciseCard';

export interface Exercise {
  id: number;
  name: string;
  bodyPart: string;
  gifUrl: string;
  target: string;
}

const ExerciseGrid = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  useEffect(() => {
    apiClient.get<Exercise[]>('').then(res => setExercises(res.data));
  }, []);

  return (
    <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={[4, 6, 8, 10]}>
      {exercises?.map(exercise => (
        <ExerciseCard exercise={exercise} key={exercise.id} />
      ))}
    </SimpleGrid>
  );
};

export default ExerciseGrid;

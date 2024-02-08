import { create } from 'zustand';

export interface ExerciseQuery {
  bodyPart?: string | null;
  equipment?: string | null;
  searchText?: string | null;
}

interface ExerciseQueryStore {
  exerciseQuery: ExerciseQuery;
  setBodyPart: (bodyPart: string) => void;
  setEquipment: (equipment: string) => void;
  setSearchText: (searchText: string) => void;
  reset: () => void;
}

const useExerciseQueryStroe = create<ExerciseQueryStore>(set => ({
  exerciseQuery: {},
  setSearchText: searchText =>
    set(store => ({
      exerciseQuery: {
        searchText,
        bodyPart: '',
        equipment: '',
      },
    })),
  setBodyPart: bodyPart =>
    set(store => ({
      exerciseQuery: {
        bodyPart,
        equipment: '',
        searchText: '',
      },
    })),
  setEquipment: equipment =>
    set(store => ({
      exerciseQuery: {
        bodyPart: '',
        equipment,
        searchText: '',
      },
    })),
  reset: () =>
    set(store => ({
      exerciseQuery: {
        bodyPart: '',
        equipment: '',
        searchText: '',
      },
    })),
}));

export default useExerciseQueryStroe;

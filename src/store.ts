import { create } from 'zustand';

export interface ExerciseQuery {
  bodyPart?: string | null;
  equipment?: string | null;
  searchText?: string | null;
  page: number;
}

interface ExerciseQueryStore {
  exerciseQuery: ExerciseQuery;
  setBodyPart: (bodyPart: string) => void;
  setEquipment: (equipment: string) => void;
  setSearchText: (searchText: string) => void;
  setPage: (number: number) => void;
  reset: () => void;
}

const useExerciseQueryStore = create<ExerciseQueryStore>(set => ({
  exerciseQuery: { page: 1 },
  setSearchText: searchText =>
    set(store => ({
      exerciseQuery: {
        searchText,
        bodyPart: '',
        equipment: '',
        page: 1,
      },
    })),
  setBodyPart: bodyPart =>
    set(store => ({
      exerciseQuery: {
        bodyPart,
        equipment: '',
        searchText: '',
        page: 1,
      },
    })),
  setEquipment: equipment =>
    set(store => ({
      exerciseQuery: {
        bodyPart: '',
        equipment,
        searchText: '',
        page: 1,
      },
    })),
  setPage: number =>
    set(store => ({
      exerciseQuery: {
        ...store.exerciseQuery,
        page: store.exerciseQuery.page + number,
      },
    })),
  reset: () =>
    set(store => ({
      exerciseQuery: {
        bodyPart: '',
        equipment: '',
        searchText: '',
        page: 1,
      },
    })),
}));

export default useExerciseQueryStore;

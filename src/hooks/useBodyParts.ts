import useData from './useData';

const useBodyParts = () => useData<string>('/bodyPartList');

export default useBodyParts;

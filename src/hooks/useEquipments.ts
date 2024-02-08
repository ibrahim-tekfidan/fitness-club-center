import useData from './useData';

const useEquipments = () => {
  return useData<string>('equipmentList');
};

export default useEquipments;

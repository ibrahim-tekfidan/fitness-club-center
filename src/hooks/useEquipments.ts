import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-exercise';
import equipments from '../data/equipments';

const useEquipments = () => {
  return useQuery<string[]>({
    queryKey: ['equipments'],
    queryFn: () =>
      apiClient.get<string[]>('/equipmentList').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: equipments,
  });
};

export default useEquipments;

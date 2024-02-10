import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useExerciseQueryStore from '../store';
import useEquipments from '../hooks/useEquipments';

const EquipmentSelector = () => {
  const { data: equipments } = useEquipments();
  const equipment = useExerciseQueryStore(s => s.exerciseQuery.equipment);
  const setEquipment = useExerciseQueryStore(s => s.setEquipment);

  return (
    <Menu>
      <MenuButton
        size={{ base: 'sm', md: 'md', lg: 'lg' }}
        colorScheme="blue"
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {equipment?.toUpperCase() || 'Equipment'}
      </MenuButton>
      <MenuList>
        {equipments?.map(equipment => (
          <MenuItem onClick={() => setEquipment(equipment)} key={equipment}>
            {equipment.toUpperCase()}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default EquipmentSelector;

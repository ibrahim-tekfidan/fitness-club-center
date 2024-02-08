import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useEquipments from '../hooks/useEquipments';

interface Props {
  selectedEquipment: string;
  onEquipment: (equipment: string) => void;
}

const EquipmentSelector = ({ onEquipment, selectedEquipment }: Props) => {
  const { data: equipments } = useEquipments();
  return (
    <Menu>
      <MenuButton
        size={{ base: 'md', lg: 'lg' }}
        colorScheme="blue"
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {selectedEquipment || 'Equipment'}
      </MenuButton>
      <MenuList>
        {equipments.map(equipment => (
          <MenuItem onClick={() => onEquipment(equipment)} key={equipment}>
            {equipment.toUpperCase()}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default EquipmentSelector;

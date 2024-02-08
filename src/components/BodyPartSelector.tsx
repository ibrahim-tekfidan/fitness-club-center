import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useBodyParts from '../hooks/useBodyParts';

const BodyPartSelector = () => {
  const { bodyParts, error } = useBodyParts();
  return (
    <Menu>
      <MenuButton colorScheme="blue" as={Button} rightIcon={<BsChevronDown />}>
        Body Part
      </MenuButton>
      <MenuList>
        {bodyParts.map(bodyPart => (
          <MenuItem key={bodyPart}>{bodyPart.toUpperCase()}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default BodyPartSelector;

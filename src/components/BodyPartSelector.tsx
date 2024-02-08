import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import bodyParts from '../data/bodyParts';

interface Props {
  onBodyPart: (bodyPart: string) => void;
  selectedBodyPart: string | null;
}

const BodyPartSelector = ({ onBodyPart, selectedBodyPart }: Props) => {
  // const { data: bodyParts, error } = useBodyParts();

  return (
    <Menu>
      <MenuButton
        size={{ base: 'md', lg: 'lg' }}
        colorScheme="blue"
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {selectedBodyPart?.toUpperCase() || 'Body Part'}
      </MenuButton>
      <MenuList>
        {bodyParts.map(bodyPart => (
          <MenuItem onClick={() => onBodyPart(bodyPart)} key={bodyPart}>
            {bodyPart.toUpperCase()}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default BodyPartSelector;

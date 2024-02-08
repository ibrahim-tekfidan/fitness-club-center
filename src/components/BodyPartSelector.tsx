import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import bodyParts from '../data/bodyParts';
import useExerciseQueryStroe from '../store';

const BodyPartSelector = () => {
  // const { data: bodyParts, error } = useBodyParts();
  const bodyPart = useExerciseQueryStroe(s => s.exerciseQuery.bodyPart);
  const setBodyPart = useExerciseQueryStroe(s => s.setBodyPart);

  return (
    <Menu>
      <MenuButton
        size={{ base: 'md', lg: 'lg' }}
        colorScheme="blue"
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {bodyPart?.toUpperCase() || 'Body Part'}
      </MenuButton>
      <MenuList>
        {bodyParts.map(bodyPart => (
          <MenuItem onClick={() => setBodyPart(bodyPart)} key={bodyPart}>
            {bodyPart.toUpperCase()}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default BodyPartSelector;

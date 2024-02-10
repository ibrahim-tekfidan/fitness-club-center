import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useExerciseQueryStore from '../store';
import useBodyParts from '../hooks/useBodyParts';

const BodyPartSelector = () => {
  const { data: bodyParts } = useBodyParts();
  const bodyPart = useExerciseQueryStore(s => s.exerciseQuery.bodyPart);
  const setBodyPart = useExerciseQueryStore(s => s.setBodyPart);

  return (
    <Menu>
      <MenuButton
        size={{ base: 'sm', md: 'md', lg: 'lg' }}
        colorScheme="blue"
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {bodyPart?.toUpperCase() || 'Body Part'}
      </MenuButton>
      <MenuList>
        {bodyParts?.map(bodyPart => (
          <MenuItem onClick={() => setBodyPart(bodyPart)} key={bodyPart}>
            {bodyPart.toUpperCase()}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default BodyPartSelector;

import { Text, HStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
        fontSize={'20px'}
        aria-label={'Toggle color mode'}
      />
      <Text fontWeight={600}>
        {colorMode === 'dark' ? 'Light' : 'Dark'} Mode
      </Text>
    </HStack>
  );
};
export default ColorModeSwitch;

import { Text, HStack, IconButton, useColorMode, Show } from '@chakra-ui/react';
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
      <Show above="md">
        <Text whiteSpace={'nowrap'} fontWeight={600}>
          {colorMode === 'dark' ? 'Light' : 'Dark'} Mode
        </Text>
      </Show>
    </HStack>
  );
};
export default ColorModeSwitch;

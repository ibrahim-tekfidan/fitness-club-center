import {
  Text,
  HStack,
  IconButton,
  useColorMode,
  Show,
  Button,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      leftIcon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
      onClick={toggleColorMode}
      fontSize={'20px'}
      aria-label={'Toggle color mode'}
    >
      <Show above="md">{colorMode === 'dark' ? 'Light' : 'Dark'} Mode</Show>
    </Button>
  );
};
export default ColorModeSwitch;

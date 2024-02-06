import { Box, HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/images/Logo4.png';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'}>
      <Box>
        <Image borderRadius={'10px'} width={'80px'} src={logo} />
      </Box>
      <HStack spacing={'50px'}>
        <Text>Home</Text>
        <Text>Exercise</Text>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;

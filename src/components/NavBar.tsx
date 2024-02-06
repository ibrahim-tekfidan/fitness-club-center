import { Box, HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/images/Logo3.png';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={'20px 40px'}>
      <Box>
        <Image borderRadius={'10px'} width={'80px'} src={logo} />
      </Box>
      <HStack spacing={'50px'}>
        <Text>Link1</Text>
        <Text>Link2</Text>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;

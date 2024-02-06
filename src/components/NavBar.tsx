import { Box, HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/images/Logo.png';

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={'20px'}>
      <Box>
        <Image src={logo} />
      </Box>
      <HStack spacing={'50px'}>
        <Text>Link1</Text>
        <Text>Link2</Text>
        <Text>Color Switch</Text>
      </HStack>
    </HStack>
  );
};

export default NavBar;

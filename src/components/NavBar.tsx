import { Box, HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/images/Logo4.png';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'}>
      <Box>
        <Image
          borderRadius={'10px'}
          width={['64px', '80px', '96px']}
          src={logo}
        />
      </Box>
      <HStack spacing={['16px', '20pX', '32px', '58px']}>
        <Text fontWeight={600}>Home</Text>
        <Text fontWeight={600}>Exercise</Text>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;

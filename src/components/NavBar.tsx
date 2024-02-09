import { Box, HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/images/Logo4.png';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack
      paddingX={['16px', '20px', '24px', '32px']}
      boxShadow={'md'}
      paddingY={['12px', '16px']}
      justifyContent={'space-between'}
    >
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

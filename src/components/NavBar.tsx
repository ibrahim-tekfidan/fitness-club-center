import { Box, HStack, Image } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/Logo4.png';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  const { pathname } = useLocation();
  const homeLocation = pathname === '/';

  return (
    <HStack
      paddingX={['16px', '20px', '24px', '32px']}
      boxShadow={'md'}
      paddingY={['12px', '16px']}
      justifyContent={'space-between'}
    >
      <Box>
        <Link to={'/'} style={{ fontWeight: '700' }}>
          <Image
            borderRadius={'10px'}
            width={['64px', '80px', '96px']}
            src={logo}
          />
        </Link>
      </Box>
      <HStack spacing={['16px', '20pX', '32px', '58px']}>
        <Link to={'/'} style={{ fontWeight: '700' }}>
          Home
        </Link>
        <Link
          to={'/'}
          onClick={() => {
            setTimeout(
              () => {
                document
                  .getElementById('FilterExercise')
                  ?.scrollIntoView({ behavior: 'smooth' });
              },
              homeLocation ? 0 : 1000
            );
          }}
          style={{ fontWeight: '700' }}
        >
          Exercise
        </Link>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;

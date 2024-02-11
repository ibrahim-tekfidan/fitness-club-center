import {
  HStack,
  Image,
  Link,
  Text,
  VStack,
  useColorMode,
} from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import logo from '../assets/images/Logo4.png';

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <VStack padding={[3, 4, 5, 6]}>
      <HStack justifyContent={'space-between'}>
        <Link
          title="Developer gmail adress"
          target="_blank"
          bgColor={colorMode === 'dark' ? 'blue.900' : 'blue.100'}
          padding={3}
          borderRadius={'100px'}
          _hover={{
            backgroundColor: colorMode === 'dark' ? 'blue.100' : 'blue.900',
            color: colorMode === 'dark' ? 'blue.900' : 'blue.100',
          }}
          color={colorMode === 'dark' ? '#90CDF4' : '#2B6CB0'}
          fontSize={['xl', '2xl', '3xl']}
          href="mailto:ibrahim.tekfidn@gmail.com"
        >
          <SiGmail />
        </Link>
        <Link
          title="Developr Linkedin adress"
          target="_blank"
          bgColor={colorMode === 'dark' ? 'blue.900' : 'blue.100'}
          padding={3}
          borderRadius={'100px'}
          _hover={{
            backgroundColor: colorMode === 'dark' ? 'blue.100' : 'blue.900',
            color: colorMode === 'dark' ? 'blue.900' : 'blue.100',
          }}
          color={colorMode === 'dark' ? '#90CDF4' : '#2B6CB0'}
          fontSize={['xl', '2xl', '3xl']}
          href="https://www.linkedin.com/in/ibrahim-tekfidan/"
        >
          <FaLinkedin />
        </Link>
      </HStack>
      <Text
        fontWeight={600}
        bgGradient={'linear(to-r, #2B6CB0, #90CDF4)'}
        bgClip="text"
        fontSize={['lg', 'lg', 'xl', '2xl']}
      >
        Copyright &copy; 2024 by ibrahim Tekfidan
      </Text>
    </VStack>
  );
};

export default Footer;

import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import logo from '../assets/images/banner.jpg';
import { color } from 'framer-motion';

const Hero = () => {
  const { colorMode } = useColorMode();

  return (
    <SimpleGrid
      position="relative"
      alignItems={'center'}
      columns={[1, 1, 2, 2]}
    >
      <Box textAlign={{ base: 'center', md: 'left' }}>
        <Heading
          bgGradient={'linear(to-r, #2B6CB0, #90CDF4)'}
          bgClip="text"
          mb={['16px', '20px', '24px', '32px']}
          fontSize={['xl', '3xl', '4xl', '5xl']}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Heading>
        <Text
          color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
          fontSize={['md', 'md', 'lg', 'xl']}
          paddingBottom={{ lg: '32px' }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          soluta neque quo illum eaque impedit qui, cumque cupiditate voluptas
          hic dolor. Reiciendis beatae aut aspernatur praesentium laborum ex
          eveniet facere?
        </Text>
        <Button
          colorScheme="blue"
          mt={['24px', '24px', '48px', '64px']}
          mb={{ base: '48px', md: '0' }}
          size={['sm', 'sm', 'md', 'lg']}
          onClick={() =>
            document
              .getElementById('SearchExercise')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Search exercise &darr;
        </Button>
      </Box>
      <Center>
        <Image
          borderRadius={'10px'}
          width={['50%', '50%', '80%', '63%']}
          src={logo}
        />
      </Center>
      <Text
        color={colorMode === 'dark' ? '#63B3ED' : '#4299E1'}
        fontWeight={700}
        fontSize={['48px', '64px', '80px', '128px']}
        position={'absolute'}
        bottom={['-40px', '-64px', '-72px', '-112px']}
        right={['48px', '80px', '0px', '24px']}
        opacity={0.1}
        zIndex="-1"
      >
        EXERCISE
      </Text>
    </SimpleGrid>
  );
};

export default Hero;

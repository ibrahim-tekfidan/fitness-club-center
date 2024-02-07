import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import logo from '../assets/images/banner.jpg';

const Hero = () => {
  return (
    <SimpleGrid alignItems={'center'} columns={[1, 1, 2, 2]}>
      <Box textAlign={{ base: 'center', md: 'left' }}>
        <Heading
          mb={['16px', '20px', '24px', '32px']}
          fontSize={['xl', '3xl', '4xl', '5xl']}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Heading>
        <Text
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
    </SimpleGrid>
  );
};

export default Hero;

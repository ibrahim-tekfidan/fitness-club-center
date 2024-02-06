import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

const SearchInput = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <Box
      margin={'0 auto'}
      width={'80%'}
      paddingY={['48px', '80px', '96px', '128px']}
    >
      <Heading
        fontSize={['xl', '2xl', '3xl', '4xl']}
        textAlign={'center'}
        mb={['16px', '24px', '32px', '32px']}
      >
        Awesome Exercise You Should Know
      </Heading>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (searchRef !== null && searchRef.current?.value) {
            console.log(searchRef.current.value);
            searchRef.current.value = '';
          }
        }}
      >
        <HStack>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <BsSearch />
            </InputLeftElement>
            <Input
              ref={searchRef}
              variant={'filled'}
              size={{ base: 'md', lg: 'lg' }}
              type="search"
              placeholder="Search Exercise"
            />
          </InputGroup>
          <Button type="submit" size={['sm', 'md', 'md', 'lg']}>
            Search
          </Button>
        </HStack>
      </form>
    </Box>
  );
};

export default SearchInput;

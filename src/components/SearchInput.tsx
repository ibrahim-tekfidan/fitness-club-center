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
  useColorMode,
} from '@chakra-ui/react';

interface Props {
  onSearchText: (searchText: string) => void;
}

const SearchInput = ({ onSearchText }: Props) => {
  const { colorMode } = useColorMode();

  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <Box
      margin={'0 auto'}
      width={'80%'}
      paddingY={['48px', '80px', '96px', '128px']}
    >
      <Heading
        bgGradient={'linear(to-r, #2B6CB0, #90CDF4)'}
        bgClip="text"
        fontSize={['xl', '2xl', '3xl', '4xl']}
        textAlign={'center'}
        mt={['32px', '48px', '64px', '64px']}
        mb={['16px', '24px', '24px', '24px']}
      >
        Awesome Exercise You Should Know
      </Heading>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (searchRef !== null && searchRef.current?.value) {
            onSearchText(searchRef.current.value);
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
              colorScheme="blue"
              ref={searchRef}
              variant={'filled'}
              size={{ base: 'md', lg: 'lg' }}
              type="search"
              placeholder="Search Exercise"
            />
          </InputGroup>
          <Button
            colorScheme="blue"
            type="submit"
            size={['sm', 'md', 'md', 'lg']}
          >
            Search
          </Button>
        </HStack>
      </form>
    </Box>
  );
};

export default SearchInput;

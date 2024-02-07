import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import SearchInput from './components/SearchInput';
import ExerciseGrid from './components/ExerciseGrid';

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main' 'footer'`,
      }}
      gridTemplateColumns={{
        base: '1fr',
      }}
    >
      <GridItem
        paddingX={['16px', '20px', '24px', '32px']}
        boxShadow={'lg'}
        paddingY={['12px', '16px', '20px']}
        area={'nav'}
      >
        <NavBar />
      </GridItem>
      <GridItem
        paddingX={['16px', '20px', '24px', '32px']}
        mt={['32px', '32px', '48px']}
        area={'main'}
      >
        <Hero />
        <SearchInput />
        <ExerciseGrid />
      </GridItem>
      <GridItem area={'footer'}>Footer</GridItem>
    </Grid>
  );
};

export default App;

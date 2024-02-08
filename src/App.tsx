import { Grid, GridItem, Stack } from '@chakra-ui/react';
import BodyPartSelector from './components/BodyPartSelector';
import EquipmentSelector from './components/EquipmentSelector';
import ExerciseGrid from './components/ExerciseGrid';
import FilterHeading from './components/FilterHeading';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import ResetFilters from './components/ResetFilters';
import SearchInput from './components/SearchInput';

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
        boxShadow={'md'}
        paddingY={['12px', '16px']}
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
        <FilterHeading />
        <Stack
          marginTop={[1, 2, 3, 4]}
          display={'flex'}
          flexDirection={{ base: 'column', md: 'row' }}
          spacing={{ base: 2, md: 4 }}
          mb={[3, 4, 5, 5]}
        >
          <BodyPartSelector />
          <EquipmentSelector />
          <ResetFilters />
        </Stack>
        <ExerciseGrid />
      </GridItem>
      <GridItem area={'footer'}>Footer</GridItem>
    </Grid>
  );
};

export default App;

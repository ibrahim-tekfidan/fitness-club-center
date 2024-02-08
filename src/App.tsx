import { Box, Grid, GridItem } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import SearchInput from './components/SearchInput';
import ExerciseGrid from './components/ExerciseGrid';
import BodyPartSelector from './components/BodyPartSelector';
import { useState } from 'react';

const App = () => {
  const [selectedBodyPart, setBodyPart] = useState('');

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
        <Box mb={[3, 4, 5, 5]}>
          <BodyPartSelector
            selectedBodyPart={selectedBodyPart}
            onBodyPart={setBodyPart}
          />
        </Box>
        <ExerciseGrid selectedBodyPart={selectedBodyPart} />
      </GridItem>
      <GridItem area={'footer'}>Footer</GridItem>
    </Grid>
  );
};

export default App;

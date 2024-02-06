import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import NavBar from './components/NavBar';

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
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <GridItem area={'main'}>Main</GridItem>
      <GridItem area={'footer'}>Footer</GridItem>
    </Grid>
  );
};

export default App;

import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

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
      <GridItem area={'nav'}>Nav</GridItem>
      <GridItem area={'main'}>Main</GridItem>
      <GridItem area={'footer'}>Footer</GridItem>
    </Grid>
  );
};

export default App;

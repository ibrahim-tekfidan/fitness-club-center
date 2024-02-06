import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main' 'footer'`,
      }}
      gridTemplateColumns={{
        base: '1fr',
      }}
      paddingX={'32px'}
    >
      <GridItem paddingY={'20px'} area={'nav'}>
        <NavBar />
      </GridItem>
      <GridItem mt={['32px', '32px', '48px']} area={'main'}>
        <Hero />
      </GridItem>
      <GridItem area={'footer'}>Footer</GridItem>
    </Grid>
  );
};

export default App;

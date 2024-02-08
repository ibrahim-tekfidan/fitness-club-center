import { Grid, GridItem, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import BodyPartSelector from './components/BodyPartSelector';
import EquipmentSelector from './components/EquipmentSelector';
import ExerciseGrid from './components/ExerciseGrid';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import SearchInput from './components/SearchInput';

const App = () => {
  const [selectedBodyPart, setBodyPart] = useState('');
  const [selectedEquipment, setEquipment] = useState('');
  const [searchText, setSearchText] = useState('');

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
        <SearchInput onSearchText={setSearchText} />
        <Stack
          display={'flex'}
          flexDirection={{ base: 'column', md: 'row' }}
          spacing={{ base: 2, md: 4 }}
          mb={[3, 4, 5, 5]}
        >
          <BodyPartSelector
            selectedBodyPart={selectedBodyPart}
            onBodyPart={setBodyPart}
          />
          <EquipmentSelector
            onEquipment={setEquipment}
            selectedEquipment={selectedEquipment}
          />
        </Stack>
        <ExerciseGrid
          searchText={searchText}
          selectedEquipment={selectedEquipment}
          selectedBodyPart={selectedBodyPart}
        />
      </GridItem>
      <GridItem area={'footer'}>Footer</GridItem>
    </Grid>
  );
};

export default App;

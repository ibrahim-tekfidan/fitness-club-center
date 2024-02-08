import { Grid, GridItem, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import BodyPartSelector from './components/BodyPartSelector';
import EquipmentSelector from './components/EquipmentSelector';
import ExerciseGrid from './components/ExerciseGrid';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import SearchInput from './components/SearchInput';

export interface ExerciseQuery {
  selectedBodyPart: string | null;
  selectedEquipment: string | null;
  searchText: string | null;
}

const App = () => {
  const [exerciseQuery, setExerciseQuery] = useState<ExerciseQuery>(
    {} as ExerciseQuery
  );

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
        <SearchInput
          onSearchText={searchText =>
            setExerciseQuery({
              selectedBodyPart: '',
              selectedEquipment: '',
              searchText,
            })
          }
        />
        <Stack
          display={'flex'}
          flexDirection={{ base: 'column', md: 'row' }}
          spacing={{ base: 2, md: 4 }}
          mb={[3, 4, 5, 5]}
        >
          <BodyPartSelector
            selectedBodyPart={exerciseQuery?.selectedBodyPart}
            onBodyPart={selectedBodyPart =>
              setExerciseQuery({
                selectedBodyPart,
                selectedEquipment: '',
                searchText: '',
              })
            }
          />
          <EquipmentSelector
            onEquipment={selectedEquipment =>
              setExerciseQuery({
                selectedBodyPart: '',
                selectedEquipment,
                searchText: '',
              })
            }
            selectedEquipment={exerciseQuery.selectedEquipment}
          />
        </Stack>
        <ExerciseGrid exerciseQuery={exerciseQuery} />
      </GridItem>
      <GridItem area={'footer'}>Footer</GridItem>
    </Grid>
  );
};

export default App;

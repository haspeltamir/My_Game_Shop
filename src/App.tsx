/*
key meaning:
  header: header
  nav: navigation
  main: main content
  aside: sidebar
  footer: footer

grid-template-areas:
  the grid-template-areas property specifies areas within 
  the grid layout. 
  You can name the areas anything you want,

grid-template-columns:
  the grid-template-columns property specifies the number of columns in a grid layout, 
  and the width of each column.

  fr: fractions
    fr will divide the available space into equal fractions

    1fr: 1 fraction of the available space
    2fr: 2 fractions of the available space
  px: pixels
    Result: 200px 1fr 1fr: 200 pixels for the first column, 
    and 1 fraction of the available space for 
    the remaining columns.
*/


import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import { Fragment, useState } from 'react'
import NavBar from "./components/2_NavBar/NavBar"
import GameGrid from "./components/4_GameGrid/GameGrid"
import GenresList from "./components/9_GanresList/GanresList"
import { Genres } from "./hooks/useGenres"
import PlatformSelector from "./components/10_PlatformSelector/PlatformSelector"
import { Platform } from "./hooks/usePlatforms"
import SortSelector from "./components/11_SortSelector/SortSelector"

/*Query Object Pattern
we use this pattern to pass multiple parameters to a function
instead of passing a bunch of parameters to a function,
we can pass a single object that contains all the parameters
*/

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: string | null;
}

function App() {
  // const [selectedGenres, setSelectedGenres] = useState<Genres | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  /*
  "as GameQuery" in typescript means that we are telling typescript that the object is of type GameQuery
  we need to do that because we are initializing the object as an empty object which is not of type GameQuery
  */
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Fragment>
      <Grid
        // base scenario: only one column
        //large scenario: 2 columns
        templateAreas={
          {
            base: `
        "nav"
        "main"
        ` ,
            // largeer than 1024px
            lg: `
            "nav nav"
            "aside main"
            `}
        }

        // templateColumns="200px 1fr"
        templateColumns={{
          base: "1fr", //if the screen is small, the column will take up the full width of the screen.
          lg: "200px 1fr"//if the screen is large, the first column will be 200 pixels wide, and the second column will take up the remaining space.
        }}
      // templateRows="100px 1fr 100px"
      // gap={4}
      >

        <GridItem area={'nav'}>
          <NavBar />
        </GridItem>
        {/* show will only render on correct size */}
        <Show above="lg">
          {/* <GridItem area={'aside'} style={{ backgroundColor: 'lightcoral' }}>Aside</GridItem> */}
          <GridItem area={'aside'} paddingX={4}>
            <GenresList
              onClickSendToParent={(genre) =>
                // setSelectedGenres(genre)
                setGameQuery({ ...gameQuery, genre })
              }
              // selectedGenera={selectedGenres}
              selectedGenera={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area={'main'} >
          <HStack spacing={4}>
            <PlatformSelector
              // selectedPlatform={selectedPlatform}
              selectedPlatform={gameQuery.platform}
              onClickSendToParent={(platform) =>
                // setSelectedPlatform(platform)
                setGameQuery({ ...gameQuery, platform })
              }
            />

            <SortSelector
              selectedSorting={gameQuery.sortOrder}
              onSelectedSortingChangeNotifyParent={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
          <GameGrid
            // selectedGeneraObject={selectedGenres}
            /*
            selectedGeneraObject={gameQuery.genres}
            selectedPlatformObject={gameQuery.platform}
            */
            gameQuery={gameQuery}
          />
        </GridItem>
      </Grid>

    </Fragment>
  )
}

export default App



/*
old code

import { Grid } from "@chakra-ui/react"
import { Fragment } from 'react'
function App() {
  return (
    <Fragment>
      <Grid
        templateAreas={
          {
            base: `
        "header header header" 
        "nav main aside"
        "footer footer footer"
        `}
        }
        templateColumns="200px 1fr 1fr"
        templateRows="100px 1fr 100px"
        gap={4}
      >
        <div style={{ gridArea: 'header', backgroundColor: 'lightblue' }}>Header</div>
        <div style={{ gridArea: 'nav', backgroundColor: 'lightgreen' }}>Nav</div>
        <div style={{ gridArea: 'main', backgroundColor: 'lightyellow' }}>Main</div>
        <div style={{ gridArea: 'aside', backgroundColor: 'lightcoral' }}>Aside</div>
        <div style={{ gridArea: 'footer', backgroundColor: 'lightpink' }}>Footer</div>
      </Grid>
    </Fragment>
  )
}

export default App


*/ 
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


import { Grid, GridItem, Show } from "@chakra-ui/react"
import { Fragment, useState } from 'react'
import NavBar from "./components/2_NavBar/NavBar"
import GameGrid from "./components/4_GameGrid/GameGrid"
import GenresList from "./components/9_GanresList/GanresList"
import { Genres } from "./hooks/useGenres"
function App() {
  const [selectedGenres, setSelectedGenres] = useState<Genres | null>(null);
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
              onClickSendToParent={(genres) =>
                setSelectedGenres(genres)}
              selectedGenera={selectedGenres}
            />
          </GridItem>
        </Show>
        <GridItem area={'main'} >
          <GameGrid selectedGeneraObject={selectedGenres} />
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
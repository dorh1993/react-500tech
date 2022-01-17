import React from 'react';
import Grid from './Grid';
import movies from './data_a';
import pokemon from './data_b';

const Trailer = ({ data }) => (
  <a href={data.url}
     target="_blank"
     rel="noopener noreferrer">
    trailer...
  </a>
);

const PokemonName = ({ data }) => <span style={{ textTransform: 'capitalize' }}>{data}</span>;

const moviesConfig = [
  {
    title: 'id',
    accessor: 'imdbID'
  },
  {
    title: 'title',
    accessor: 'Title'
  },
  {
    title: 'rating',
    accessor: 'imdbRating',
  },
//   {
//    title: 'trailer',
//    accessor: 'Trailer',
//   //  component: Trailer
//  }
];

const pokemonConfig = [
  {
    title: 'pokedex #',
    accessor: 'number'
  },
  {
    title: 'name',
    accessor: 'name',
    // component: PokemonName
  },
];

const App = () => (
  <div>
    <h2>Movies</h2>
    <Grid tableConfig={moviesConfig} tableData={movies} />

    <h2>Pokemon</h2>
    <Grid tableConfig={pokemonConfig} tableData={pokemon} />
  </div>
);

export default App;

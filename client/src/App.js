import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import {Switch, Route} from 'react-router-dom';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route path ='/movies/:movieID' >
          <Movie />
        </Route>
        <Route path ='/movies' >
          <MovieList />
        </Route>
        <Route path ='/'/>
      </Switch>
    </div>
  );
};

export default App;

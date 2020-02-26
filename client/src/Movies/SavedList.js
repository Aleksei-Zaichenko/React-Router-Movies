import React from 'react';
import { useHistory } from 'react-router-dom';

 function SavedList (props){

  const history = useHistory();

  const routeToHome =() => {
    history.push("/")
  }

  return(
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <button onClick={routeToHome} className="home-button">Home</button>
  </div>
  );
 };//SavedList

export default SavedList;

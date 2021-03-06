import React from 'react';
import './destinations.css';
import SingleDestination from './singleDestination';
import { withRouter } from "react-router-dom"

function Destinations(props) {
  const destinations = props.data.map((destination, id) => {
    return <div className="link"
      key={id}
      onClick={() => {
        props.history.push(`/${destination.id}`)
        props.handleDetails(destination.id)
      }}>
      <SingleDestination
        key={id}
        data={destination}
        favorites={props.favorites}
        handleLike={props.handleLike}
        currentUser={props.currentUser}
        image={destination.image_url}
        onStarClick={props.onStarClick}
      />
    </div>
  });

  return (
    <div className="destinations">
      <h1>{props.title}</h1>
      <div className="listContainer">
        {destinations}
      </div>
    </div>
  );
}

export default withRouter(Destinations);

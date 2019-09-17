import React from 'react';
import SingleDestination from './singleDestination';

function Destinations(props) {
  const destinations = props.data.map((destination, id) => {
    return <SingleDestination
      key={id}
      data={destination}
      favorites={props.favorites}
    />
  });

  return (
    <div className="destinations">
      <h1>{props.title}</h1>
      {destinations}
    </div>
  );
}

export default Destinations;

import React from 'react';
import './main.css';
import Login from './login';
import Home from './home';
import Destinations from './destinations';
import Details from './details';
import { Route, Switch } from 'react-router-dom';

function Main(props) {
  return (
    <div className="main">
      <Switch>
        <Route path='/favorites' render={() => (
          <Destinations
            title={'Favorites'}
            data={props.favorites}
            favorites={props.favorites}
            handleLike={props.handleLike}
            handleDetails={props.handleDetails}
            currentUser={props.currentUser}
            onStarClick={props.onStarClick}
            ratings={props.currentUser? props.currentUser.ratings: []}
          />
        )}/>
        <Route exact path='/bites' render={() => (
          <Destinations
            title={'Bites'}
            data={props.bites}
            favorites={props.favorites}
            handleLike={props.handleLike}
            handleDetails={props.handleDetails}
            currentUser={props.currentUser}
            onStarClick={props.onStarClick}
            ratings={props.currentUser? props.currentUser.ratings: []}
            />
          )}/>
        <Route exact path='/sites' render={() => (
          <Destinations
            title={'Sites'}
            data={props.sites}
            favorites={props.favorites}
            handleLike={props.handleLike}
            handleDetails={props.handleDetails}
            currentUser={props.currentUser}
            onStarClick={props.onStarClick}
            ratings={props.currentUser? props.currentUser.ratings: []}
          />
        )}/>
        <Route exact path='/login' render={() => (
          <Login
            title={'login'}
            {...props}
          />
        )}/>
        <Route exact path='/register' render={() => (
          <Login
            title={'register'}
            {...props}
          />
        )}/>
        {props.details &&
          <Route exact path={`/:${props.details.id}`} render={() => (
            <Details
            data={props.details}
            onStarClick={props.onStarClick}
            ratings={props.currentUser? props.currentUser.ratings: []}
            />
          )}/>
        }
        <Route path='/' render={() => (
          <Home
            title={'HOME'}
            {...props}
          />
        )}/>

      </Switch>
    </div>
  );
}

export default Main;

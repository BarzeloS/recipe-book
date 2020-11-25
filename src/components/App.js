import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomeComponent from './HomeComponent';
import AboutComponent from './AboutComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ContactComponent from './ContactComponent';
import RecipePageComponent from './RecipePageComponent';
import Account from './AccountComponent';

import '../style.css';

//Overall layouting
//Here we have the header, footer and anything else which is site-wide
function App() {
  return (
    
      <BrowserRouter >
        <HeaderComponent />
        <div className='container main'>
        <Switch>
          <Route path='/' exact={true}>
            <HomeComponent />
          </Route>
          <Route path='/about'>
            <AboutComponent />
          </Route>
          <Route path='/contact'>
            <ContactComponent />
          </Route>
          <Route path='/account'>
            <Account />
          </Route>
          <Route path='/recipes/:id'>
            <RecipePageComponent />
          </Route>
        </Switch>
        </div>
        <FooterComponent />
      </BrowserRouter>
    
  );
}

export default App;

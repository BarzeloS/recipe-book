import React from 'react';

import HomeComponent from './HomeComponent';
import AboutComponent from './AboutComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ContactComponent from './ContactComponent';
import RecipePageComponent from './RecipePageComponent';


import '../style.css';

//Overall layouting
//Here we have the header, footer and anything else which is site-wide
function App() {
  return (
    <>
      <HeaderComponent />
      <div className="main">
        <HomeComponent />
      </div>
      <FooterComponent />
    </>
  );
}

export default App;

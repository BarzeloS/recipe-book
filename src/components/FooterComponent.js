import React from "react";
import {Link} from 'react-router-dom';

function FooterComponent() {
  return (
    <div className="footer">
      <nav className="navbar navbar-dark footnav">
        <div className="container">
          <Link className="navbar-brand" to="/" style={{fontSize:'20px'}}>
            <img src="/images/tfr-logo.png" width="33" height="33"
              className="d-inline-block align-top mr-2" alt="" loading="lazy" />
                    Thai Food Recipes
            </Link>
          <p style={{color: '#72a096', fontSize: '16px', paddingTop: '10px'}}>Created by A.B. | 2020</p>
        </div>
      </nav>

    </div>
  );
}

export default FooterComponent;

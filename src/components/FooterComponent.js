import React from "react";

function FooterComponent() {
  return (
    <div className="footer">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#" style={{fontSize:'24px'}}>
            <img src="images/tfr-logo.png" width="40" height="40"
              className="d-inline-block align-top mr-2" alt="" loading="lazy" />
                    Thai Food Recipes
            </a>
          <p style={{color: '#888888', fontSize: '18px', paddingTop: '8px'}}>Created by A.B. | 2020</p>
        </div>
      </nav>

    </div>
  );
}

export default FooterComponent;

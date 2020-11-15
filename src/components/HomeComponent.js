import React, { useState, useEffect } from 'react';

import RecipeGroup from './RecipeGroupComponent';


function HomeComponent() {


    return (
        <div className="container bg-light">

            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mb-3">
                            <h2 className="display-4">A Random Recipe</h2>
                            <p className="lead">Not Your Taste? Click Below To Find Another One</p>
                            <a className="btn btn-info btn-sm" href="#" role="button">Do it</a>
                        </div>
                        <div className="col-lg-7">
                            <img src="images/tomyumgoong.jpg" className="img-fluid" alt="Responsive image" />
                        </div>
                    </div>

                </div>
            </div>


            <div className="row mt-3">
                <div className="col-md-6 text-center">
                    <h3>Available Recipes</h3>
                </div>
                <div className="col-md-6 text-center">
                    <div className="form-group mt-2">
                        <div className="form-check form-check-inline">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Most Popular</label>
                        </div>
                        <div className="form-check form-check-inline ml-2">
                            <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                            <label className="form-check-label" htmlFor="exampleCheck2">Newest</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-1"></div>
                <div className="col-10">
                    <input className="form-control form-control-lg search" type="text" placeholder="Search here for a specific Recipe or Ingredient..." />
                </div>
                <div className="col-1"></div>
            </div>

            <hr />

            <div className="row mt-4">
                <RecipeGroup />
            </div>


        </div>
    );
}

export default HomeComponent;
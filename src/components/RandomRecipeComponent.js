import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getRandomRecipe } from '../api/recipes-api';


function RandomRecipe() {

    const [recipe, setRecipe] = useState(null)

    const randomize = async () => {
        const recipe = await getRandomRecipe();
        setRecipe(recipe);

    }

    useEffect(() => randomize(), []);

    return (
        recipe &&
        <div className="jumbotron">
            <div className="row">
                <div className="col-lg-5 mb-3">
                    <h2 className="display-4">{recipe.title}</h2>
                    <p className="lead">Not Your Taste? Try Another One</p>
                    <a className="btn btn-outline-dark btn-lg" role="button" onClick={randomize} >Random Recipe</a>
                </div>
                <div className="col-lg-7">
                    <Link to={`/recipes/${recipe.id}`}>
                        <img src={recipe.image} className="img-fluid rCard" alt="Responsive image" />
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default RandomRecipe;
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import data from '..//api/data';


function RecipePageComponent() {

    const { id } = useParams();

    const [recipes, setRecipe] = useState([]);
    const getRecipesFromApi = async () => {
        const apiRecipes = await data;
        setTimeout(() => {
            setRecipe(apiRecipes);
        }, 800)
    };

    useEffect(() => {
        getRecipesFromApi();
    }, [])

    const recipe = recipes.find((recipe) => recipe.id == id);

    let i = 0; // for keys of li's below

    if (!recipes.length) {
        return <img src='/images/loader.gif' />;
    
    }
    
    return (


        <div className="jumbotron mb-0">

            <div className="row">

                <div className="col-lg-5">
                    <h1 className="display-4">{recipe.title}</h1>
                    <p className="lead">{recipe.subtitle}</p>
                </div>
                <div className="col-lg-7">
                    <img style={{ boxShadow: ' 0 0 7px grey' }} src={recipe.image} className="img-fluid" alt="Responsive image" />
                </div>

            </div>


            <div className="row mt-5">
                <div className="col-1"></div>
                <div className="col-10">
                    <h4>Ingredients</h4>
                    <ul className="list-group list-group-flush">

                        {
                            recipe.ingredients.map(ingredient => <li key={i += 1} className="list-group-item">{ingredient}</li>)
                        }

                    </ul>
                </div>
                <div className="col-1"></div>

            </div>


            <div className="row mt-5">
                <div className="col-1"></div>
                <div className="col-10">
                    <h4>Preperation</h4>
                    <p>{recipe.prep}</p>
                </div>
                <div className="col-1"></div>

            </div>
            <div className="row mt-5">
                <div className="col-6 text-center">
                    {id > 1 ? <Link to={`/recipes/${Number(id) - 1}`} className="btn btn-outline-secondary btn-sm">Previos Recipe</Link> : ''}
                </div>
                <div className="col-6 text-center">
                    {id < recipes.length ? <Link to={`/recipes/${Number(id) + 1}`} className="btn btn-outline-secondary btn-sm">Next Recipe</Link> : ''}
                </div>
            </div>

        </div>


    );
}

export default RecipePageComponent;



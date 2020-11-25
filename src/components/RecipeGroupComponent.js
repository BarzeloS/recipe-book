import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCardComponent';


import data from '..//api/data'; /// test only delete
// import data from '..//api/data';
import { getRecipes, updateRecipeViews } from '../api/recipes-api';


function RecipeGroup() {

    const [recipes, setRecipes] = useState([]);
    let search = '';

    useEffect(async () => {
        let jsonRecipes = null;
        if (!localStorage.getItem('recipes')) {
            jsonRecipes = await getRecipes();
            localStorage.setItem('recipes', JSON.stringify(jsonRecipes));
        } else {
            jsonRecipes = JSON.parse(localStorage.getItem('recipes'));
        }
        setTimeout(() => {
            setRecipes(jsonRecipes);
        }, 800);
    }, []);


    async function plusView(recipeId) {
        await updateRecipeViews(recipeId);
        setRecipes(
            recipes.map(recipe => {
                if (recipe.id == recipeId) {
                    return {
                        ...recipe,
                        views: recipe.views + 1,
                        updated: new Date().toLocaleString('he-IL')
                    }
                }
                return recipe;
            })
        );
    }

    function sortRecipesBy(by) {
        const cards = [...recipes];
        if (by === 'popular') {
            cards.sort((cardA, cardB) => cardB.views - cardA.views);
        } else if (by === 'newest') {
            
            cards.sort((cardA, cardB) => cardB.updated - cardA.updated);
        }
        setRecipes(cards);
    }


    const onSearch = ({ target: { value: text } }) => {
        if (!text) {            
          setRecipes(recipes);
          return;
        }
        const lower = text.toLowerCase();
        const filtered = recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(lower)
        );
        setRecipes(filtered);
      };


    return (

        <>
            <div className="row mt-3">
                <div className="col-md-7 text-center">
                    <h3 style={{color:'#50776d'}}>Showing Available Recipes</h3>
                </div>
                <div className="col-md-5 text-center">

                    <div className="form-group mt-2">

                        <div onClick={() => sortRecipesBy('popular')} className="form-check form-check-inline">
                            <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label className="form-check-label ml-2" htmlFor="exampleRadios1">Most Popular</label>
                        </div>
                        <div onClick={() => sortRecipesBy('newest')} className="form-check form-check-inline ml-2">
                            <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label className="form-check-label ml-2" htmlFor="exampleRadios1">New</label>
                        </div>

                    </div>

                </div>
            </div>

            <div className="row mt-2">
                <div className="col-1"></div>
                <div className="col-10">
                    <input className="form-control form-control-lg search"  type="text" defaultValue={search} onKeyUp={onSearch} placeholder="Search here for a Recipe or Ingredient.." />
                </div>
                <div className="col-1"></div>
            </div>

            <hr />

            <div className="row mt-4">

                {
                    !recipes.length && <img src="images/loader.gif" style={{ margin: 'auto' }} />
                }

                {
                    recipes.map(recipe => <RecipeCard {...recipe} key={recipe.id} clickView={plusView} />)
                }

            </div>
        </>
    )
}

export default RecipeGroup;


import React, {useState} from 'react';
import RecipeCard from './RecipeCardComponent';
import data from '..//api/data';


function RecipeGroup() {
               
    const [recipes, setRecipes] = useState(data);
    
    return (
        <>
        {
            recipes.map(recipe => <RecipeCard {...recipe} key={recipe.id} />)
        }
        </>
    )

}

export default RecipeGroup;
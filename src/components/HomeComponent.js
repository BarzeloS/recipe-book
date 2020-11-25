import React from 'react';

import RecipeGroup from './RecipeGroupComponent';
import RandomRecipe from './RandomRecipeComponent';


function HomeComponent() {

    return (
        <>
            <RandomRecipe />

            <RecipeGroup />
            
        </>
    );
}

export default HomeComponent;
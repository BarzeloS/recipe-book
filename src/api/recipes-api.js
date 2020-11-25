//import data from './data';

import data from '..//api/data';


const getRecipes = async () => {
    return data;
}

const getRecipe = async id => {
    return data[0]; // TODO - find the recipe
}

const getRandomRecipe = async () => {
    return data[Math.floor(Math.random() * data.length)];
}

const updateRecipeViews = id => {
    //...write the code to update the JSON data
    
    //...update the local storage (maybe load there everyhing again) 
    const jsonRecipes = JSON.parse(localStorage.getItem('recipes'));
    if(jsonRecipes){
        jsonRecipes.forEach(recipe => {
            if(recipe.id == id){
                recipe.views++;
                recipe.updated = new Date().toLocaleString('he-IL');
            }
        });
        localStorage.setItem('recipes', JSON.stringify(jsonRecipes));
    }
}

export {
    getRecipes,
    getRecipe,
    getRandomRecipe,
    updateRecipeViews
}

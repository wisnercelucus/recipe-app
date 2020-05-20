import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A new recipe', 
            'Card columns can also be extended and customized with some additional code.', 
            'https://i.ndtvimg.com/i/2015-10/urlai-roast_625x350_71444723419.jpg'),
        new Recipe(
            'A second recipe', 
            'Card columns can also be extended and customized with some additional code.', 
            'https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg')
      ];

     

    getRecipes(){
        return this.recipes.slice();
    }
}
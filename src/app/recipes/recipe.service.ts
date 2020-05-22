import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A new recipe', 
            'Card columns can also be extended and customized with some additional code.', 
            'https://i.ndtvimg.com/i/2015-10/urlai-roast_625x350_71444723419.jpg',
            [
                new Ingredient('Meet', 8),
                new Ingredient('Bean', 5)
            ]),
        new Recipe(
            'A second recipe', 
            'Card columns can also be extended and customized with some additional code.', 
            'https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg',
            [
                new Ingredient('Coca cola', 7),
                new Ingredient('Beer', 2)
            ])
      ];

    constructor(private shoppinListService:ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id:number){
        return this.recipes[id];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]){
        this.shoppinListService.addIngredients(ingredients);
    }
}
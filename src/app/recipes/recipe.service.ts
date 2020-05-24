import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
    recipeChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [];

    constructor(private shoppinListService:ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }
        
    setRecipes(recipes: Recipe[]){
        this.recipes=recipes;
        this.recipeChanged.next(this.recipes.slice())
    }


    getRecipe(id:number){
        return this.recipes[id];
    }

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice())
    }

    updateRecipe(id:number, newRecipe:Recipe){
        this.recipes[id]=newRecipe;
        this.recipeChanged.next(this.recipes.slice())
    }

    addIngredientToShoppingList(ingredients: Ingredient[]){
        this.shoppinListService.addIngredients(ingredients);
    }

    deleteRecipe(id:number){
        this.recipes.splice(id, 1)
        this.recipeChanged.next(this.recipes.slice())
    }
}
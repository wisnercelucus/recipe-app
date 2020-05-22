//import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{
    //ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
    startedIdeting = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Poireaux', 25)
      ]

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    getIngredientItem(id:number){
        return this.ingredients[id]
    }

    updateIngredient(id:number, newIngredient:Ingredient){
        this.ingredients[id] = newIngredient
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    deleteIngredient(id:number){
        this.ingredients.splice(id, 1)
        this.ingredientsChanged.next(this.ingredients.slice())

    }

}
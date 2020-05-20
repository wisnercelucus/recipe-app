import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('Poireaux', 25)
      ]


    getIngredients(){
        return this.ingredients.slice();
    }
}
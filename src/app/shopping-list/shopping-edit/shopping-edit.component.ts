import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editingItemId: number;
  editedItem:Ingredient;
  @ViewChild('f') shListForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }


  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedIdeting
    .subscribe(
      (id:number) =>{
        this.editingItemId = id;
        this.editMode=true;
        this.editedItem = this.shoppingListService.getIngredientItem(this.editingItemId)
        this.shListForm.setValue(
          {
            name: this.editedItem.name,
            amount:this.editedItem.amount
          }
        )
      }
    )
  }
  onAddItem(form: NgForm){
    const value = form.value
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editingItemId, newIngredient)
    }else{
      this.shoppingListService.addIngredient(newIngredient)
    }
    this.editMode=false;
    form.reset();    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  onClear(){
    this.shListForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.shoppingListService.deleteIngredient(this.editingItemId)
    this.onClear()
  }

}

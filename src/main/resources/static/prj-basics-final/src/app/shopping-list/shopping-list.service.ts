import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";



export class ShoppingListService {

  onAddedSl=new Subject<Ingredient[]>();
  startedEditting=new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  getIngredient(index:number){
    return this.ingredients[index];
  }

  getShoppingList(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.onAddedSl.next(this.ingredients.slice())
  }

  addIngredients(ingredient:Ingredient[]){
    this.ingredients.push(...ingredient);
    this.onAddedSl.next(this.ingredients.slice());
  }

  updateIngredient(index:number,newIngredient:Ingredient){
    this.ingredients[index]=newIngredient;
    this.onAddedSl.next(this.ingredients.slice())
  }

  deleteIngredient(index:number){
    this.ingredients.splice(index,1);
    this.onAddedSl.next(this.ingredients.slice());
  }

}

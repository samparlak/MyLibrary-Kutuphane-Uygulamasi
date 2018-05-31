
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {

 private recipes: Recipe[] = [
    new Recipe
    ('A Test Recipe',
     'This is simply a test', 
     'https://cdn.yemek.com/mncrop/940/625/uploads/2017/11/firinda-tavuk-sis-tarifi.jpg',
    [new Ingredient('Tavuk',3),
    new Ingredient('Patates kızartması',6)]),
    new Recipe
    ('Another Test Recipe',
     'This is simply a test',
      'https://media-cdn.tripadvisor.com/media/photo-s/0f/3a/d4/65/sulu-yemek.jpg',
    [new Ingredient('Soğan',2),
  new Ingredient('Biber',1)])
  ];

  recipeChanged=new Subject<Recipe[]>();

  constructor(private shoppingListService:ShoppingListService) { }

  setRecipes(recipes:Recipe[]){
    this.recipes=recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

onAddList(ingredient:Ingredient[]){
  this.shoppingListService.addIngredients(ingredient);
}
addRecipe(recipe:Recipe){
  this.recipes.push(recipe);
  this.recipeChanged.next(this.recipes.slice());
}
updateRecipes(index:number,newRecipe:Recipe){
  this.recipes[index]=newRecipe;
  this.recipeChanged.next(this.recipes.slice());
  
}

deleteRecipe(index:number){
  this.recipes.splice(index,1);
  this.recipeChanged.next(this.recipes.slice());
}

}

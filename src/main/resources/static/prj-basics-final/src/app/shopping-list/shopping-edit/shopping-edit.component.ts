import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import {  NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('f') slForm:NgForm;
  editMode:boolean=false;
  editedItemIndex:number;
  subscription:Subscription;
  editedItem:Ingredient;

  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.subscription=this.slService.startedEditting.subscribe(
      (index:number)=>{
        this.editMode=true;
        this.editedItemIndex=index;
        this.editedItem=this.slService.getIngredient(index);
        this.slForm.setValue(
          {name:this.editedItem.name,amount:this.editedItem.amount})
      }
    )
  }

  onSubmit(form:NgForm){
    const newIngredient=new Ingredient(form.value.name,form.value.amount);
    if(this.editMode){
     this.slService.updateIngredient(this.editedItemIndex,newIngredient);
    }
    else{
      this.slService.addIngredient(newIngredient);
    }
    this.editMode=false;
    form.reset();
  }

  onClear(){
    this.editMode=false;
    this.slForm.reset();
  }

  onDelete(){
    this.slForm.reset();
    this.slService.deleteIngredient(this.editedItemIndex);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

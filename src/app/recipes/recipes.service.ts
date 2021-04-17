import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes : Recipe[] = [
    {
      id: 'r1',
    title: 'something1',
    imageUrl:'https://balabs.com/wp-content/uploads/2019/01/ingredient-analysis-laboratory.jpg',
    ingredients:['Fries','Egg Yolk']
  },
    {
      id: 'r2',
    title: 'something2',
    imageUrl:'https://balabs.com/wp-content/uploads/2019/01/ingredient-analysis-laboratory.jpg',
    ingredients:['Water','Salat']
  },
    {
      id: 'r3',
    title: 'something3',
    imageUrl:'https://balabs.com/wp-content/uploads/2019/01/ingredient-analysis-laboratory.jpg',
    ingredients:['Mustard','Salt']
  },
    {
      id: 'r4',
    title: 'something4',
    imageUrl:'https://balabs.com/wp-content/uploads/2019/01/ingredient-analysis-laboratory.jpg',
    ingredients:['Sugar','Salat']
  },
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId:string){
    return {
      ...this.recipes.find(recipe=>{
      return recipe.id===recipeId;
    }
    )};
  }

  deleteRecipe(recipeId:string){
    this.recipes=this.recipes.filter(recipe=>{
      return recipe.id!==recipeId;
    })
  }
}

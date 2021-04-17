import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AlertController} from '@ionic/angular'
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
 loadRecipe: Recipe;

  constructor(private recipe:RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alrtController: AlertController,
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('recipeId')){
        return;
      }
      const recId = paramMap.get('recipeId');
      console.log(recId);
      this.loadRecipe= this.recipe.getRecipe(recId);
    }
    
    );
  }
  onDeleteRecipe(){
    this.alrtController.create({
      header: 'Are You Sure?',
      message:'Do You really want to delete this recipe?',
      buttons: [{ 
        text:'Cancel',
        role: 'cancel',
      },{
        text:'Delete',
        handler:()=>{
          this.recipe.deleteRecipe(this.loadRecipe.id);
           this.router.navigate(['/recipes']);
        },
      }
    ]

    })
    .then(alert=>{
      alert.present();
    });
  
  }


}

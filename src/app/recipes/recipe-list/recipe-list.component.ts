import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is test',
      'https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13-1500x1125.jpg'
    ),
    new Recipe(
      'Another test recipe',
      'This is another test',
      'https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13-1500x1125.jpg'
    )
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

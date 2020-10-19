import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Recipe Title', 'Simply Recipe Description is here', 'https://assets.bonappetit.com/photos/597f6557a2d4466309949378/1:1/w_400%2Cc_limit/0817-murray-mancini-grilled-chinese-beef-broccoli.jpg'),
    new Recipe('Another Recipe Title', 'Another Simply Recipe Description is here', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

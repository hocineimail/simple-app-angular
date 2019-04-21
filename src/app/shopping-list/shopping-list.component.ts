import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'; 
import { from } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('apples',5),
    new Ingredient('Tomates',35)
  ];
  constructor() { }

  ngOnInit() {
  }

}

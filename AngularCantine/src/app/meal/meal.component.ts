import { Component, OnInit } from '@angular/core';
import { MealService } from '../services/meal.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  mealList;
  constructor(private mealService: MealService) { }

  ngOnInit() {
    this.findAllmealForToday();
  }
  findAllmealForToday() {
    this.mealService.mealAllforToday().subscribe(data => this.mealList = data)
  }
}

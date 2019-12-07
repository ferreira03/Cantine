import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuList;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.findAllmenuForToday();
  }
  findAllmenuForToday() {
    this.menuService.menuAllforToday().subscribe(data => this.menuList = data)
  }

}

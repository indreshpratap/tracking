import { Component, OnInit } from '@angular/core';
import { MENU } from '../../app.menu.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedMenu;
  constructor() { }

  ngOnInit() {
    this.selectedMenu = MENU.ADMIN;
  }

}

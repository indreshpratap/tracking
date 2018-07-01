import { Component, OnInit } from '@angular/core';
import { MENU } from '../../app.menu.model';
import { AuthService } from '../../../shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedMenu;
  constructor(private router:Router,private auth:AuthService) { }

  ngOnInit() {
    this.selectedMenu = this.auth.isAdmin()?MENU.ADMIN:MENU.USER;
  }

  doLogout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/auth.service';

@Component({
  selector: 'app-inv-list',
  templateUrl: './inv-list.component.html',
  styleUrls: ['./inv-list.component.css']
})
export class InvListComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

}

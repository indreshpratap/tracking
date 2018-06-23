import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adm-clients',
  templateUrl: './adm-clients.component.html',
  styleUrls: ['./adm-clients.component.css']
})
export class AdmClientsComponent implements OnInit {


  clients;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.fetchClients();
  }

  fetchClients(){
    this.http.get('http://localhost:3000/api/admin/fetch-client')
    .subscribe((res:any)=>{
        if(res.status){
          this.clients = res.data;
          
        }
    });
  }

}

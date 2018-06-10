import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-adm-new-client',
  templateUrl: './adm-new-client.component.html',
  styleUrls: ['./adm-new-client.component.css']
})
export class AdmNewClientComponent implements OnInit {

  regForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.prepareForm();
  }

  disableForm() {
    this.regForm.disable();
  }

  enableForm() {
    this.regForm.enable();
  }
  save() {
    console.log(this.regForm.value);
    alert("Client Saved");
    this.regForm.reset();
  }
  prepareForm() {
    this.regForm = new FormGroup({
      clientName: new FormControl('Mr.', Validators.required),
      orginationName: new FormControl(null, Validators.required),
      contactPerson: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(null,[Validators.required,Validators.minLength(10)]),
      address: new FormControl(),
    });
  }

}

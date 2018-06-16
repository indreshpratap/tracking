import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-adm-new-project',
  templateUrl: './adm-new-project.component.html',
  styleUrls: ['./adm-new-project.component.css']
})
export class AdmNewProjectComponent implements OnInit {

  form: FormGroup;
  billingType: Array<string>;
  constructor() { }

  ngOnInit() {
    this.prepareForm();
    this.billingType = ["HOURLY", 'FIXED'];
  }

  save() {

  }

  private prepareForm() {
    this.form = new FormGroup({
      client: new FormControl(null, [Validators.required]),
      projectName: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      billingType: new FormControl(null, [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      startDate: new FormControl(null, [Validators.required]),
      projectedEndDate: new FormControl(null, [Validators.required]),
      weburl: new FormControl(null, [Validators.required]),

    });
  }



}

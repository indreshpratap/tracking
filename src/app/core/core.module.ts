import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import {routes} from "./core.routes";
import { UiToolkitModule } from '../ui-toolkit/ui-toolkit.module';


@NgModule({
  imports: [
    UiToolkitModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})
export class CoreModule { }

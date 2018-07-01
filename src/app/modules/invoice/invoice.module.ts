import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvListComponent } from './inv-list/inv-list.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { UiToolkitModule } from '../../ui-toolkit/ui-toolkit.module';
import { UserGuard } from '../../shared/gaurds/user.gaurd';


const routes:Routes = [
  {path:"list",component:InvListComponent, canActivate:[UserGuard]}
]
@NgModule({
  imports: [
    SharedModule,
    UiToolkitModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InvListComponent]
})
export class InvoiceModule { }

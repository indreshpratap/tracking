import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmNewProjectComponent } from './components/adm-new-project/adm-new-project.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { UiToolkitModule } from '../../ui-toolkit/ui-toolkit.module';

const routes:Routes = [
  {path:"new-project",component:AdmNewProjectComponent}
]

@NgModule({
  imports: [
    SharedModule,
    UiToolkitModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdmNewProjectComponent]
})
export class AdminModule { }

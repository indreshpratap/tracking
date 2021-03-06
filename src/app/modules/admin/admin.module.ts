import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { UiToolkitModule } from '../../ui-toolkit/ui-toolkit.module';
import { AdmNewProjectComponent } from './components/adm-new-project/adm-new-project.component';
import { AdmNewClientComponent } from './components/adm-new-client/adm-new-client.component';
import { AdmClientsComponent } from './components/adm-clients/adm-clients.component';

const routes:Routes = [
  {path:"clients",component:AdmClientsComponent},
  {path:"new-client",component:AdmNewClientComponent},
  {path:"new-project",component:AdmNewProjectComponent}
]

@NgModule({
  imports: [
    SharedModule,
    UiToolkitModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdmNewProjectComponent, AdmNewClientComponent, AdmClientsComponent]
})
export class AdminModule { }

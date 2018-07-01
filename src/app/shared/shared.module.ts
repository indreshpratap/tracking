import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { AuthService } from './auth.service';
import { SecureGuard } from './gaurds/secure.gaurd';
import { AdminGuard } from './gaurds/admin.gaurd';
import { UserGuard } from './gaurds/user.gaurd';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],


  declarations: []
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [RestService, AuthService,
        SecureGuard,
        AdminGuard,
        UserGuard
      ],
    }
  }
}

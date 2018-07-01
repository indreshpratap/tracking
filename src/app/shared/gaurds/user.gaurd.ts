import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';

import { AuthService } from '../auth.service';

@Injectable()
export class UserGuard implements CanActivate {

    constructor(private auth:AuthService){

    }
    canActivate( ): boolean {
      console.log(this.auth.isUser());
        return this.auth.isUser();
    }
}

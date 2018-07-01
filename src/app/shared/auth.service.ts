import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    private user;
    private isLoggedIn;


    login(user) {
        this.user = user;
        this.isLoggedIn = true;
        console.log(this.user,this.isLoggedIn);
    }

    isAuthenticated():boolean {
       // console.log('coming',this.user,this.isLoggedIn);
        return this.isLoggedIn && this.user!=null?true:false;
    }

    logout() {
        this.isLoggedIn= false;
        this.user = null;
    }

    isAdmin(){
     return   this.user !=null && this.user.role ==='admin'?true:false;
    }

    isUser(){
        return   this.user !=null && this.user.role ==='user'?true:false;
       }
}
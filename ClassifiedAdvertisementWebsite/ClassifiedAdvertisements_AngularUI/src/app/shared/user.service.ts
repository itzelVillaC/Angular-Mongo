import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthService, SocialUser } from 'angularx-social-login';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public userLoggedIn: EventEmitter<boolean> = new EventEmitter();

    constructor(private http: HttpClient, private authService: AuthService) { }

    storeData(userData: SocialUser) {
        localStorage.setItem('Token', userData.idToken);
        localStorage.setItem('userData', JSON.stringify(userData));
    }
    getToken() {
        return localStorage.getItem('Token');
    }
    getData(): SocialUser {
        return JSON.parse(localStorage.getItem('userData'));
    }
    logOut() {
        localStorage.clear();
        this.authService.signOut(true);
    }
}
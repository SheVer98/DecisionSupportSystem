import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  login(username: string, password: string): boolean {
    // logika uwierzytelniania
    if (username === 'admin' && password === 'admin') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): boolean {
    console.log("wylogowano");
    this.isLoggedIn = false;
    return false;
  }
}

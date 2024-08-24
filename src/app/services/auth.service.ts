import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isLoggedIn = false; // This should be managed based on your authentication logic

  constructor() {}

  login() {
    this.isLoggedIn = true; // Set to true upon successful login
  }

  logout() {
    this.isLoggedIn = false; // Set to false upon logout
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}

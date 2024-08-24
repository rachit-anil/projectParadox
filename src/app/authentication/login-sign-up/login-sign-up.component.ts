import { Component } from "@angular/core";
import { LoginComponent } from "../login/login.component";
import { SignUpComponent } from "../sign-up/sign-up.component";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-login-sign-up",
  standalone: true,
  imports: [CommonModule, LoginComponent, SignUpComponent, MatButtonModule],
  templateUrl: "./login-sign-up.component.html",
  styleUrl: "./login-sign-up.component.scss",
})
export class LoginSignUpComponent {
  // selectedComponent = "signup";
  // selectedComponent = "login";
  selectedComponent = "";
}

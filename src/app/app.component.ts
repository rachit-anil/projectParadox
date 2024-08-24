import { Component } from "@angular/core";
import { Router, RouterModule, RouterOutlet } from "@angular/router";
import { LoginComponent } from "./authentication/login/login.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, LoginComponent, RouterModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "projectParadox";
  constructor(private router: Router) {}
}

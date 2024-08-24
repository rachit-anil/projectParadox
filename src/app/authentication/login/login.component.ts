import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(5)]],
    });
  }

  get username(): FormControl {
    return this.loginForm.get("username") as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get("password") as FormControl;
  }

  onSubmit() {
    const loginData = {
      email: this.loginForm.get("username")!.value,
      password: this.loginForm.get("password")!.value,
    };

    this.http.post("/api/login", loginData).subscribe({
      next: (response: any) => {
        // Save token or user data, usually in localStorage
        localStorage.setItem("token", response.token);
        // Navigate to the home page or dashboard
        this.router.navigate(["/home"]);
      },
      error: (error) => {
        // Handle errors here, e.g., show an error message
        console.error("Login failed", error);
      },
    });
  }
}

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
  selector: "app-sign-up",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: "./sign-up.component.html",
  styleUrl: "./sign-up.component.scss",
})
export class SignUpComponent {
  signUpForm!: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.signUpForm = this.fb.group({
      name: ["", Validators.required],
      mobile: ["", Validators.required],
      username: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(5)]],
    });
  }

  get mobile(): FormControl {
    return this.signUpForm.get("mobile") as FormControl;
  }

  get username(): FormControl {
    return this.signUpForm.get("username") as FormControl;
  }

  get password(): FormControl {
    return this.signUpForm.get("password") as FormControl;
  }

  get name(): FormControl {
    return this.signUpForm.get("name") as FormControl;
  }

  onSubmit() {
    const loginData = {
      email: this.signUpForm.get("username")!.value,
      password: this.signUpForm.get("password")!.value,
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

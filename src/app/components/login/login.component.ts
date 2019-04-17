import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import DataService from "src/app/service/DataService";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });

  loginError = false;
  constructor(
    private http: HttpClient,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {}

  onLogin() {
    const email = this.form.value.email;
    const password = this.form.value.password;
    // Sender api request her...
    const url = "http://localhost:9090/login";
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
      Authorization: "Basic " + btoa(email + ":" + password)
    });
    console.log("email: ", email);
    console.log("password: ", password);

    this.http.post(url, {}, { headers }).subscribe(
      user => {
        this.dataService.setLoggedUser(user);
        this.router.navigate([""]);
      },
      error => {
        this.loginError = true;
        console.log("error: ", error);
      }
    );
  }
}

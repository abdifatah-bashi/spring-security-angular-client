import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "signup-form",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl("")
  });

  registered: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    console.log("inside onSubmit: ");
    const firstName = this.form.value.firstName;
    const lastName = this.form.value.lastName;
    const email = this.form.value.email;
    const password = this.form.value.password;

    const user = {
      firstName,
      lastName,
      email,
      password
    };

    // sender api signup request her
    const headers = new HttpHeaders();
    headers.append("ContentType", "application/json");
    const url = "http://localhost:9090/signup";
    this.http.post(url, user, { headers }).subscribe(
      newUser => {
        this.registered = true;
        setTimeout(() => {
          this.router.navigate(["login"]);
          this.registered = false;
        }, 3000);
      },
      err => console.log("error: ", err)
    );
  }
}

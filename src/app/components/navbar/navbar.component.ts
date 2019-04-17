import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import DataService from "src/app/service/DataService";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  // Dependency injection

  loggedUser: any = null;
  constructor(private router: Router, private dataService: DataService) {}

  // Lifecycles
  // 1. Contrcutor

  ngOnInit() {
    this.loggedUser = this.dataService.getLoggedUser();
    console.log("inside ngOnInit navbar");
    console.log("loggedUser: ", this.loggedUser);
  }

  onLogin() {
    console.log("onLogin.....");
    this.router.navigate(["login"]);
  }

  logoutHandler() {
    console.log("inside logoutHandler");
    this.dataService.setLoggedUser(null);
    this.loggedUser = null;
    this.router.navigate([""]);
  }
}

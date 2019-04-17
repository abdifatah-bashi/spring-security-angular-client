import { Injectable } from "@angular/core";
@Injectable()
export default class DataService {
  loggedUser: any;

  setLoggedUser(user) {
    this.loggedUser = user;
  }

  getLoggedUser() {
    return this.loggedUser;
  }
}

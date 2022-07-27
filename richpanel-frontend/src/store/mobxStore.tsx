import { makeAutoObservable } from "mobx";

class Store {
  public email: string = "";
  public userSuccesssfullyLoggedIn: boolean = false;
  public active: string = "monthly";

  constructor() {
    makeAutoObservable(this);
  }

  setEmail(email: string) {
    this.email = email;
  }
  setUserSuccesssfullyLoggedIn(userSuccesssfullyLoggedIn: boolean) {
    this.userSuccesssfullyLoggedIn = userSuccesssfullyLoggedIn;
  }
  setActive(active: string) {
    this.active = active;
  }
}

export default new Store();

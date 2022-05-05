import { Component, OnInit } from "@angular/core";
import { UserService } from "./../../../service/user.service";
import { v4 } from "uuid";
import { IUser } from "src/app/interface";
import { Router } from "@angular/router";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  users: IUser[];

  getUsersData(): void {
    this.userService.getUsers().subscribe((result) => {
      this.users = result;
    });

    // let myuuid = v4();
    // console.log("Your UUID is: " + myuuid);
  }

  goToDetails(id): void {
    this.router.navigate(["user", id]);
  }

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsersData();
  }
}

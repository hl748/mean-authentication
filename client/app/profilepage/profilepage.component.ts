import { Component, OnInit } from "@angular/core";
import { AuthenticationService, UserDetails } from "../authentication.service";

@Component({
  templateUrl: "./profilepage.component.html",
  styleUrls: ["./profilepage.component.css"]
})
export class ProfileComponent implements OnInit {
  details!: UserDetails;

  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
    this.auth.profile().subscribe(
      user => {
        this.details = user;
      },
      err => {
        console.error(err);
      }
    );
  }
}
import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  logged: boolean = false;
  admin: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    let dataUser = JSON.parse(localStorage.getItem('user')!)
    if(dataUser) {
      this.logged = true;
      if(dataUser.typeAccess == 'ADMIN') {
        this.admin = true
      }
    } else {
      this.logged = false;
    }
  }

  loggout() {
    localStorage.clear()
  }

}

import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  logged: boolean = false;
  admin: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    let dataUser = JSON.parse(localStorage.getItem('user')!)
    if(dataUser) {
      this.logged = true;
      if(dataUser.typeAccess == 'ADMIN') {
        this.admin = true
      } else {
        this.admin = false
      }
    } else {
      this.logged = false;
    }
  }

  loggout() {
    localStorage.clear()
    this.router.navigateByUrl('/home')
  }

}

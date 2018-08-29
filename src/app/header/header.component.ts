import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <a class="navbar-brand" href="#"><img class="logo" src="../assets/images/logo.png"/></a>
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">iTunes</a>
      </li>
      <li class="nav-item" [routerLinkActive]="['active']">
        <a class="nav-link" href="/#/">Home</a>
      </li>
      <li class="nav-item" [routerLinkActive]="['active']">
        <a class="nav-link" [routerLink]="['search']">Search</a>
      </li>
      <li class="nav-item" [routerLinkActive]="['active']">
        <a class="nav-link disabled" href="/#/home">Coming Soon..</a>
      </li>
      <li class="nav-item" [routerLinkActive]="['active']">
        <a class="nav-link disabled" (click)="goSearch();">Coming Soon2..</a>
      </li>
    </ul>
  </nav>
  `,
  styles: [`
          .logo {
            height: 25px;
            width: 25px;
            vertical-align: middle;
            border-style: none;
            margin-bottom: 4px;
                }
          `]
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) {
    
   }
   goHome() {
    this.router.navigate(['']);
    }
    goSearch() {
      let part = "search"
      this.router.navigate([part]);
    }

  ngOnInit() {
  }

}

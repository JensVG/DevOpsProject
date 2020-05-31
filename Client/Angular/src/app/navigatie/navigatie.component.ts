import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigatie',
  templateUrl: './navigatie.component.html',
  styleUrls: ['./navigatie.component.css']
})
export class NavigatieComponent implements OnInit {

  constructor(public auth: AuthService,private router: Router) { }
  img : string = "../../../assets/images/jupiler.png"
  get IsHome() {
    return this.router.isActive('/login', true)
  }

  get Style() {
    switch (this.router.url) {
      case '/start':
      case '/spelers':
      case '/ploegen':
        return "ui-button-danger"
      default:
        return "Todo"
    }
  }
  ngOnInit() {
  }
}

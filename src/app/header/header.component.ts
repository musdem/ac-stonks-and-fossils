import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // TODO grab this info from the API once logged in
  user = {
    name: 'Zack',
    price: 140,
    priceBought: 91,
    turnipsBought: 1960
  };

  loggedIn = false;

  constructor() { }

  ngOnInit(): void {
  }

}

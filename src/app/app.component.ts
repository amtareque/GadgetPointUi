import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'GadgetPointUi';


constructor() {}

  ngOnInit(): void {
    // this.http.get('https://localhost:5001/api/products?pageSize=50').subscribe((response: 
    // IPagination) => {
    //   this.products = response.data;
    // }, error => {
    //   console.log(error);
    // });
    // this.loadBasket();
    // this.loadCurrentUser();
  }
}

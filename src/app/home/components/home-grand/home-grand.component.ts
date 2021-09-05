import { Component, Injectable, Injector, OnInit } from '@angular/core';

// @Injectable()
// class Product {
//   constructor(private name : string, private color: string){}
// }

// @Injectable()
// class PerchaseOrder {
//   private amount : any;
//   constructor(private product : Product){}
// }

@Component({
  selector: 'app-home-brand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {

  /**管道用 */
  public obj : any = {
    productId:1,
    productName:'小米MIX4',
    price:4999}
  public date : any;
  public data : any = [1,2,3,4,5];
  public date2 : any;

  constructor() { }

  ngOnInit() {
    /**管道用 */
    this.date = new Date();
    this.date2 = this.minusMonths(new Date(), 24);
  }

  /**管道用 */
  minusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }
  minusMonths(date: Date, months: number) {
    const result = new Date(date);
    result.setMonth(result.getMonth() - months);
    return result;
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-amount',
  templateUrl: './product-amount.component.html',
  styleUrls: ['./product-amount.component.css']
})
export class ProductAmountComponent implements OnInit {

  @Input() public count: any = 0;
  @Output() public amountChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  handleDecrease() {
    if(this.count <= 0){
      return;
    }
    this.amountChange.emit(--this.count);
  }

  handleIncrease() {
    this.amountChange.emit(++this.count);
  }

}

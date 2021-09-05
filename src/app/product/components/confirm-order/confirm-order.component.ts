import { Component, OnInit } from '@angular/core';
import { combineLatest, merge, Observable, Subject } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { DialogService } from 'src/app/dialog';
import { ProductVariant } from '../../domain';
import { Payment } from '../payment';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {

  item$ : Observable<object | null>;
  count$ = new Subject<number>();

  totalPrice$: Observable<number>;

  payments: Payment[];

  constructor(private dialogService: DialogService) { }

  ngOnInit() {

    this.payments = this.payments = [
      {
        id: 1,
        name: '微信支付',
        icon: 'assets/icons/wechat_pay.png',
        desc: '50元以内可免密支付'
      },
      {
        id: 2,
        name: '支付宝',
        icon: 'assets/icons/alipay.png'
      },
      {
        id: 3,
        name: '找微信好友支付',
        icon: 'assets/icons/friends.png'
      }
    ];
    
    /**数据已经存到service
     * shareReplay: 共享流。将此item$作为源头，下面的单价、数量不在重复订阅
     */
    this.item$ = this.dialogService.getData().pipe(
      tap(val => console.log(val)),
      shareReplay(1)
    );

    // 单价
    const unitPrice$ = this.item$.pipe(
      map((item: {variant: ProductVariant, count: number}) => item.variant.price)
    );
    // 数量
    const amount$ = this.item$.pipe(
      map((item: {variant: ProductVariant, count: number}) => item.count)
    );
    // merge:合并同类型的流，将真实的数量反映到一起
    const mergedCount$ = merge(amount$, this.count$);
    // combineLatest：联合操作符，当两个流(单价和数量)都有值的情况下，会进行下一步操作。
    // 合并成新的流(是一个/组数组)，对两个值进行计算。(可以不是同类型的流)
    this.totalPrice$ = combineLatest([unitPrice$, mergedCount$]).pipe(
      map(([price, amount]) => price * amount)
    );

  }

  handleAmountChange(count: number) {
    // 作为数据的发射源，将数据发射出去，同时也是一个可以订阅的流
    this.count$.next(count);
  }

  handlePay() {

  }

}

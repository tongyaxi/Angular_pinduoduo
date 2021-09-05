import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {

  countDown$ : Observable<string>|any;
  @Input() startDate : any = new Date();
  @Input() futureDate : any;
  private _MS_PER_SECOND = 1000;

  constructor() { }

  ngOnInit() {
    this.countDown$ = this.getCountDownObservable(this.startDate, this.futureDate);
  }

  /**ES6函数式写法 */
  private difInSec = (start:Date, future:Date) :number => {
    const dif = future.getTime() - start.getTime();

    return Math.floor(dif / this._MS_PER_SECOND);
  }

  /**倒计时 使用map可以多次改变流的形态。*/
  private getCountDownObservable = (startDate:Date, futureDate:any) :any => {
    return interval(1000).pipe(
      map(elapse => this.difInSec(startDate, futureDate) - elapse),
      takeWhile(gap => gap>=0),
      // tap(val => console.log(val)),
      map(sec => ({
        day: Math.floor(sec / 3600 / 24),
        hour: Math.floor((sec / 3600) % 24),
        minute: Math.floor((sec / 60) % 60),
        second: Math.floor(sec % 60)
      })),
      map(({ hour, minute, second }) => `${hour}:${minute}:${second}`));
  }

}

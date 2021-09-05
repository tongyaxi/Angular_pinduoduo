import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GroupOrder } from '../../domain';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupItemComponent implements OnInit {

  @Input() public groupOrder :GroupOrder | any;
  startDate : Date | any;
  futureDate : Date | any;

  constructor() { }

  ngOnInit() {
    this.startDate = this.groupOrder.startAt;
    this.futureDate = new Date(this.groupOrder.startAt.getTime() + 24 * 3600 * 1000);
  }

}

import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackButtonComponent implements OnInit {

  
  @Input() float : any = true;

  public get imgUrl() {
    return this.float ? 'assets/icons/back_light.png':'assets/icons/back_dark.png';
  } 

  constructor(private localtion: Location) { }

  ngOnInit() {
  }

  handleClick() {
    this.localtion.back();
  }

}

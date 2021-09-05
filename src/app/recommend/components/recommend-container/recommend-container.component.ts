import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from 'src/app/home/servies';
import { Ad, Product } from 'src/app/shared/domain';

@Component({
  selector: 'app-recommend-container',
  templateUrl: './recommend-container.component.html',
  styleUrls: ['./recommend-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendContainerComponent implements OnInit {

  public ad$: Observable<Ad[]> | any;

  public products$: Observable<Product[]> |any;
  
  constructor(private service: HomeService) { }

  ngOnInit() {

    this.ad$ = this.service.getAdByTab('men');

    this.products$ = this.service.getProductByTab('men');
  }

}

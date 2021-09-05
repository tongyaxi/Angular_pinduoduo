import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { ImageSlider, ImageTitle } from 'src/app/shared/components';
import { Ad, Product } from 'src/app/shared/domain';
import { HomeService } from '../../servies';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  /**@Input属性改变时才会触发脏值检测，使组件变成纯粹的木偶组件。 */
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {

  // public selectedTabLink : any;使之变成一个数据流.Observable<String>;
  public selectedTabLink$ : Observable<string>|any;

  public imagesliders$: Observable<ImageSlider[]>|any;

  public channels$ : Observable<ImageTitle[]>|any;

  public username : string = '';

  public sub: Subscription|any;

  public ad$: Observable<Ad[]> | any;

  public products$: Observable<Product[]> |any;

  constructor(private route : ActivatedRoute, private service: HomeService, private cd:ChangeDetectorRef) { 

  }
  
  ngOnInit() {

    // 使用async.pipe的话，不需要清理订阅，this.sub.unsubscribe();
    // 使之变成一个数据流。两个rxjs的操作符，数据从字典型的流转换成字符型的流。
    // filter为true时候，放行。
    this.selectedTabLink$! = this.route.paramMap
    .pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    );
    // .subscribe(tabLink => {
    //   console.log('路径参数：',tabLink)
    //   this.selectedTabLink = tabLink;
    //   this.cd.markForCheck();
    // });

    // 没使用async.pipe的话，需要清理订阅，否则会导致内存泄露。
    this.route.queryParamMap.subscribe(params => {
      console.log('查询参数：',params)
    });

    this.imagesliders$ = this.service.getBanners();
    // .subscribe(banners => {
    //   this.imagesliders = banners;
    //   /**由于没有用@Input修饰器，所有需要调用脏值检测的方法，来通知系统检测自己的变化。 */
    //   this.cd.markForCheck();
    // });

    this.channels$ = this.service.getChannels();
    // .subscribe(channels => {
    //   this.channels = channels;
    //   this.cd.markForCheck();
    // });

    this.ad$ = this.selectedTabLink$.pipe(
      switchMap((tab) => this.service.getAdByTab(tab)));
      // filter(ads => ads.length > 0),
      // map(ads => ads[0]));

    this.products$ = this.selectedTabLink$.pipe(
      switchMap((tab) => this.service.getProductByTab(tab))
    );
  }

  /**清理订阅 */
  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }
}

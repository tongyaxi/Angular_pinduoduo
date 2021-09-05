import { ChangeDetectionStrategy, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ImageSliderComponent, TopMenu } from 'src/app/shared/components';
import { HomeService, token } from '../../servies';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeContainerComponent implements OnInit {
  
  public topMenus$: Observable<TopMenu[]>|any;

  public selectedTabLink$ : Observable<string>|any;

  // @ViewChild('imgSlider') imgsl : ImageSliderComponent;

  constructor(private router:Router,
              private service: HomeService,
              @Inject(token) private baseUrl : string,
              private route : ActivatedRoute) {

   }

  ngOnInit() {
    this.topMenus$ = this.service.getTabs();
    // .subscribe(tabs => {
    //   this.topMenus = tabs;
    // });
    this.selectedTabLink$ = this.route.firstChild.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    );
  }
  
  handelTabSelected(topMenu:TopMenu){
    // console.log('TpoMenus:',topMenu.title + topMenu.link)
    this.router.navigate(['home',topMenu.link]);

    /**依赖注入 */
    console.log('依赖注入：',this.baseUrl)
  }

}

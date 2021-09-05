import { Injectable } from '@angular/core';
import { ImageSlider, ImageTitle, TopMenu } from 'src/app/shared/components';
import { HomeDetailComponent } from '../components';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Ad, Product } from 'src/app/shared/domain';

/**依赖注入第二种写法，angular6后引入的。第一种是在providers中注入。
 * 如果是依赖到某个模块。provideIn:HomeDetailComponent
 */
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient:HttpClient) {

  }

  // topMenus: TopMenu[] = [
  //   {
  //     title: '热门',
  //     link: 'hot',
  //     id: 1
  //   },
  //   {
  //     id: 2,
  //     title: '男装',
  //     link: 'men'
  //   },
  //   {
  //     id: 3,
  //     title: '百货',
  //     link: 'department'
  //   },
  //   {
  //     id: 4,
  //     title: '运动',
  //     link: 'sports'
  //   },
  //   {
  //     id: 5,
  //     title: '手机',
  //     link: 'mobile'
  //   },
  //   {
  //     id: 6,
  //     title: '家纺',
  //     link: 'textile'
  //   },
  //   {
  //     id: 7,
  //     title: '食品',
  //     link: 'food'
  //   },
  //   {
  //     id: 8,
  //     title: '电器',
  //     link: 'appliance'
  //   },
  //   {
  //     id: 9,
  //     title: '鞋包',
  //     link: 'shoes'
  //   },
  //   {
  //     id: 10,
  //     title: '汽车',
  //     link: 'cars'
  //   },
  //   {
  //     id: 11,
  //     title: '水果',
  //     link: 'fruits'
  //   },
  //   {
  //     id: 12,
  //     title: '电脑',
  //     link: 'computers'
  //   },
  //   {
  //     id: 13,
  //     title: '内衣',
  //     link: 'underwears'
  //   },
  //   {
  //     id: 14,
  //     title: '家装',
  //     link: 'home'
  //   },
  //   {
  //     id: 15,
  //     title: '母婴',
  //     link: 'baby'
  //   },
  //   {
  //     id: 16,
  //     title: '美妆',
  //     link: 'makeup'
  //   },
  //   {
  //     id: 17,
  //     title: '家具',
  //     link: 'furnitures'
  //   }
  // ];

  // imagesliders: ImageSlider[] = [
  //   {
  //     imgUrl:
  //       'https://media.istockphoto.com/photos/morning-jogging-picture-id497687118',
  //     link: '',
  //     caption: ''
  //   },
  //   {
  //     imgUrl:
  //       'https://media.istockphoto.com/photos/listening-the-music-picture-id508949258',
  //     link: '',
  //     caption: ''
  //   },
  //   {
  //     imgUrl:
  //       'https://media.istockphoto.com/photos/pretty-young-teenage-girl-relaxing-on-a-grass-picture-id521982322',
  //     link: '',
  //     caption: ''
  //   },
  //   {
  //     imgUrl:
  //       'https://media.istockphoto.com/photos/beautiful-women-working-out-in-gym-picture-id623680490',
  //     link: '',
  //     caption: ''
  //   },
  //   {
  //     imgUrl:
  //       'https://media.istockphoto.com/photos/jogging-with-my-best-friend-picture-id850045040',
  //     link: '',
  //     caption: ''
  //   }
  // ];

  // public items : ImageTitle[] = [
  //   {
  //     id: 1,
  //     title: '限时秒杀',
  //     icon:
  //       'http://t00img.yangkeduo.com/goods/images/2018-11-13/298376dd8176f90df743de9f08a756eb.png',
  //     link: 'hot'
  //   },
  //   {
  //     id: 2,
  //     title: 'セール',
  //     icon:
  //       'http://t00img.yangkeduo.com/goods/images/2018-12-07/678088ee2500f08a193ea8619bc0ae76.png',
  //     link: 'men'
  //   },
  //   {
  //     id: 3,
  //     title: 'ブランド',
  //     icon:
  //       'http://t00img.yangkeduo.com/goods/images/2019-03-14/a01571d7bde632029c76ad9a298570ec.png',
  //     link: 'sports'
  //   },
  //   {
  //     id: 4,
  //     title: '果物',
  //     icon:
  //       'http://t00img.yangkeduo.com/goods/images/2018-12-03/d21a7598e29ce189a9a57bb234ee4fad.png',
  //     link: 'department'
  //   },
  //   {
  //     id: 5,
  //     title: '9块9特卖',
  //     icon:
  //       'http://t01img.yangkeduo.com/images/2018-05-16/d86ceaeaa0bccaeb3b3dee76f64f0192.png',
  //     link: 'food'
  //   },
  //   {
  //     id: 6,
  //     title: '助力享免单',
  //     icon:
  //       'http://t05img.yangkeduo.com/images/2018-05-16/bf18833fa4c298a040fe01f279f6f6ec.png',
  //     link: 'textile'
  //   },
  //   {
  //     id: 7,
  //     title: '天天领现金',
  //     icon:
  //       'http://t10img.yangkeduo.com/images/2018-05-16/712fc1e7f4f7b0572257ef162b5185a9.png',
  //     link: 'mobile'
  //   },
  //   {
  //     id: 8,
  //     title: '1分抽大奖',
  //     icon:
  //       'http://t05img.yangkeduo.com/images/2018-05-04/c71c9acd8b48203a704f6c0951caddc0.png',
  //     link: 'appliance'
  //   },
  //   {
  //     id: 9,
  //     title: '充值中心',
  //     icon:
  //       'http://t00img.yangkeduo.com/goods/images/2018-12-02/68aefda33f6afac045997edd25a3844e.png',
  //     link: 'shoes'
  //   },
  //   {
  //     id: 10,
  //     title: '每日好店',
  //     icon:
  //       'http://t00img.yangkeduo.com/goods/images/2019-01-20/d36b7af30da354cb2c8ad4ea7bd819cd.png',
  //     link: 'computers'
  //   },
  //   {
  //     id: 11,
  //     title: '现金签到',
  //     icon:
  //       'http://t00img.yangkeduo.com/goods/images/2018-08-01/f13e2dff54d604518a1db4facd89d300.png',
  //     link: 'fruits'
  //   },
  //   {
  //     id: 12,
  //     title: '金猪赚大钱',
  //     icon:
  //       'http://t00img.yangkeduo.com/goods/images/2019-02-05/1351e256a0319a6885761b937d06d581.png',
  //     link: 'cars'
  //   },
  //   {
  //     id: 13,
  //     title: '大型家電',
  //     icon:
  //       'http://t00img.yangkeduo.com/goods/images/2018-11-26/ee327a5ee7fb7ff76a98cf71be967a20.png',
  //     link: 'underwears'
  //   },
  //   {
  //     id: 14,
  //     title: '爱逛街',
  //     icon:
  //       'http://t03img.yangkeduo.com/images/2018-05-16/a666ac01e718dd06231a722baa6fa935.png',
  //     link: 'home'
  //   },
  //   {
  //     id: 15,
  //     title: '砍价免费拿',
  //     icon:
  //       'http://t00img.yangkeduo.com/goods/images/2018-11-14/4ad66f8d7d28d6237a9f25b9a6d19f3e.png',
  //     link: 'baby'
  //   },
  //   {
  //     id: 16,
  //     title: '帮帮免费团',
  //     icon:
  //       'http://t11img.yangkeduo.com/images/2018-04-28/5cfc9925dac860135143921e0f687a7d.png',
  //     link: 'furnitures'
  //   }
  // ];

  getTabs() {
    return this.httpClient.get<TopMenu[]>(`${environment.baseUrl}/tabs`, { params: {icode: `${environment.icode}`}});
  }

  getBanners() {
    return this.httpClient.get<ImageSlider[]>(`${environment.baseUrl}/banners`, { params: {icode: `${environment.icode}`}});
  }

  getChannels() {
    return this.httpClient.get<ImageTitle[]>(`${environment.baseUrl}/channels`, { params: {icode: `${environment.icode}`}});
  }
  getAdByTab(tab: any) {
    return this.httpClient.get<Ad[]>(`${environment.baseUrl}/ads`, {
      params: { categories_like: tab }
    });
  }

  getProductByTab(tab: any) {
    return this.httpClient.get<Product[]>(`${environment.baseUrl}/products`, {
      params: { categories_like: tab }
    });
  }


}
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TabItem } from '../../domain';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // 同样使组件变为木偶组件
})
export class FooterComponent implements OnInit {

  @Input()
  public selectedIndex : any = 0;

  @Output()
  public tabSelected = new EventEmitter();

  public tabItems : TabItem[] = [
    {
      title: '首页',
      icon: '/assets/tabs/home.png',
      link: 'home',
      selectedIcon: '/assets/tabs/home_selected.png'
    },
    {
      title: '推荐',
      icon: '/assets/tabs/recommend.png',
      link: 'recommend',
      selectedIcon: '/assets/tabs/recommend_selected.png'
    },
    {
      title: '分类',
      icon: '/assets/tabs/category.png',
      link: 'category',
      selectedIcon: '/assets/tabs/category_selected.png'
    },
    {
      title: '聊天',
      icon: '/assets/tabs/chat.png',
      link: 'chat',
      selectedIcon: '/assets/tabs/chat_selected.png'
    },
    {
      title: '个人中心',
      icon: '/assets/tabs/my.png',
      link: 'my',
      selectedIcon: '/assets/tabs/my_selected.png'
    }
  ];
  constructor() { }

  ngOnInit() {

  }

  toggleSelected(id : any) {
    console.log(id)
    this.selectedIndex = id;
    /**最好让父组件处理(页面切换)，所以需要将选中的item抛出去。 */
    this.tabSelected.emit(this.tabItems[id]);
  }

}

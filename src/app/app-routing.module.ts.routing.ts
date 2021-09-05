import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HomeContainerComponent, HomeDetailComponent } from './home';

/**
 * 在功能模块中定义子路由后，只要导入该模块，等同于在根路由中直接定义
 * 也就是说在 AppModule 中导入 HomeModule 的时候，
 * 由于 HomeModule 中导入了 HomeRouting Module
 * 在 HomeRoutingModule 中定义的路由会合并到根路由表
 * 相当于直接在根模块中定义下面的数组。
 * 需要注意的一个地方是 Angular 路由数组的**顺序**非常重要。
 * 所以此处的 `redirect` 这个条目在根路由中起到了定义各功能模块路由顺序的意义。
 *
 * ```typescript
 * const routes = [{
 *   path: 'home',
 *   component: HomeContainerComponent
 * }]
 * ```
 */
 const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'my', loadChildren: () => import('./my').then(m => m.MyModule) },
  {
    path: 'recommend',
    loadChildren: () => import('./recommend').then(m => m.RecommendModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat').then(m => m.ChatModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category').then(m => m.CategoryModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./product').then(m => m.ProductModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./product').then(m => m.ProductModule)
  }
 ]  

@NgModule({
  /**
   * 根路由使用 `RouterModule.forRoot(routes)` 形式。
   * 而功能模块中的路由模块使用 `outerModule.forChild(routes)` 形式。
   * 启用路由的 debug 跟踪模式，需要在根模块中设置 `enableTracing: true`
   */
   imports: [
    // 使用环境变量配置在不同环境下是否激活路由跟踪
    RouterModule.forRoot(routes, { enableTracing: !environment.production })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

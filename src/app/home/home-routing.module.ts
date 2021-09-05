import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGrandComponent, HomeContainerComponent, HomeDetailComponent, ParentComponent } from './components';

const routes: Routes = [
  {path: 'home',
   component: HomeContainerComponent,
   children: 
   [
     /**路由节点可以没有component,一般用于重定向到一个默认子路由 */
     {
       path: '',
       redirectTo: 'hot',
       pathMatch: 'full'
     },
     {
       /**路径参数，看起来是url的一部分，可以通过key获取路径参数。:tabLink=> params.get('tabLink') */
       path: ':tabLink',
       component: HomeDetailComponent,
       children: [
         {
           path: 'grand',
           component: HomeGrandComponent
         }]
     },
   ]},
   {
     path: 'change-detection',
     component: ParentComponent,
     pathMatch: 'full',
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

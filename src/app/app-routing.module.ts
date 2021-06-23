import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemAComponent } from './item-a/item-a.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'routeA',
    pathMatch: 'full'
  },
  {
    path: 'routeA',
    loadChildren: () => import('./item-a/item-a.module').then(m => m.ItemAModule),
  },
  {
    path: 'routeB',
    loadChildren: () => import('./item-b/item-b.module').then(m => m.ItemBModule),
  },
  {
    path: 'routeC',
    loadChildren: () => import('./item-c/item-c.module').then(m => m.ItemCModule),
  },
  {
    path: '**', component: ItemAComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

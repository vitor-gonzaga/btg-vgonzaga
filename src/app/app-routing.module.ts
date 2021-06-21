import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemAComponent } from './item-a/item-a.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'item-a',
    pathMatch: 'full'
  },
  {
    path: 'route-a',
    loadChildren: () => import('./item-a/item-a.module').then(m => m.ItemAModule),
  },
  {
    path: 'route-b',
    loadChildren: () => import('./item-b/item-b.module').then(m => m.ItemBModule),
  },
  {
    path: 'route-c',
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

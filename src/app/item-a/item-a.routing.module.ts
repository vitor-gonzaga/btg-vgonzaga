import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemAComponent } from './item-a.component';

const routes: Routes = [{ path: '', component: ItemAComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

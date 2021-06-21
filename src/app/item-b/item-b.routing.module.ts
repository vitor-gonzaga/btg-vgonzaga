import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemBComponent } from './item-b.component';

const routes: Routes = [{ path: '', component: ItemBComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

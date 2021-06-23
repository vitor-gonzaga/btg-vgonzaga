import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCComponent } from './item-c.component';

const routes: Routes = [{ path: '', component: ItemCComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemCRoutingModule { }

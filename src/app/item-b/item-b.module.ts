import { NgModule } from '@angular/core';
import { ItemBComponent } from './item-b.component';
import { ItemBRoutingModule } from './item-b.routing.module';

@NgModule({
  declarations: [
    ItemBComponent,
  ],
  imports: [ItemBRoutingModule],
  exports: [ItemBComponent]
})
export class ItemBModule { }

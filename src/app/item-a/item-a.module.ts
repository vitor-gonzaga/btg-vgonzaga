import { NgModule } from '@angular/core';
import { ItemAComponent } from './item-a.component';
import { ItemARoutingModule } from './item-a.routing.module';

@NgModule({
  declarations: [
    ItemAComponent,
  ],
  imports: [ItemARoutingModule],
  exports: [ItemAComponent]
})
export class ItemAModule { }

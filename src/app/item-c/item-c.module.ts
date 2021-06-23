import { NgModule } from '@angular/core';
import { ItemCComponent } from './item-c.component';
import { ItemCRoutingModule } from './item-c.routing.module';

@NgModule({
  declarations: [
    ItemCComponent,
  ],
  imports: [ItemCRoutingModule],
  exports: [ItemCComponent]
})
export class ItemCModule { }

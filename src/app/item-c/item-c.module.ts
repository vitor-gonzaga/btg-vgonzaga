import { NgModule } from '@angular/core';
import { ItemCComponent } from './item-c.component';
import { ItemCRoutingModule } from './item-c.routing.module';
import { ButtonModule } from 'btg-vgonzaga';

@NgModule({
  declarations: [
    ItemCComponent,
  ],
  imports: [ItemCRoutingModule, ButtonModule],
  exports: [ItemCComponent]
})
export class ItemCModule { }

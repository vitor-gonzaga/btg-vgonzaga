import { NgModule } from '@angular/core';
import { ButtonModule } from 'projects/btg-vgonzaga/src/public-api';
import { ItemCComponent } from './item-c.component';
import { ItemCRoutingModule } from './item-c.routing.module';

@NgModule({
  declarations: [
    ItemCComponent,
  ],
  imports: [ItemCRoutingModule, ButtonModule],
  exports: [ItemCComponent]
})
export class ItemCModule { }

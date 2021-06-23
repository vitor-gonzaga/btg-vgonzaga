import { NgModule } from '@angular/core';
import { ButtonModule } from 'projects/btg-vgonzaga/src/public-api';
import { ItemBComponent } from './item-b.component';
import { ItemBRoutingModule } from './item-b.routing.module';

@NgModule({
  declarations: [
    ItemBComponent,
  ],
  imports: [ItemBRoutingModule, ButtonModule],
  exports: [ItemBComponent]
})
export class ItemBModule { }

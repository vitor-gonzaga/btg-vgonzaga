import { NgModule } from '@angular/core';
import { ButtonModule } from 'btg-vgonzaga';
import { ItemAComponent } from './item-a.component';
import { ItemARoutingModule } from './item-a.routing.module';

@NgModule({
  declarations: [
    ItemAComponent,
  ],
  imports: [ItemARoutingModule, ButtonModule],
  exports: [ItemAComponent]
})
export class ItemAModule { }

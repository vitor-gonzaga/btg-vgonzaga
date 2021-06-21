import { NgModule } from '@angular/core';
import { ItemAComponent } from './item-a.component';

@NgModule({
  declarations: [
    ItemAComponent,
  ],
  exports: [ItemAComponent]
})
export class ItemAModule { }

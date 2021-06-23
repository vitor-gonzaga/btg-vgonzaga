import { NgModule } from '@angular/core';
import { BtgVgonzagaComponent } from './btg-vgonzaga.component';
import { MenuModule } from './menu/menu.module';



@NgModule({
  declarations: [
    BtgVgonzagaComponent,
  ],
  imports: [
    MenuModule
  ],
  exports: [
    BtgVgonzagaComponent, MenuModule
  ]
})
export class BtgVgonzagaModule { }

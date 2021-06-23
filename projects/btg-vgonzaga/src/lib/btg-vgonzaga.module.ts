import { NgModule } from '@angular/core';
import { BtgVgonzagaComponent } from './btg-vgonzaga.component';
import { MenuModule } from './menu/menu.module';
import { ButtonModule } from './button/button.module';



@NgModule({
  declarations: [
    BtgVgonzagaComponent,
  ],
  imports: [
    MenuModule, ButtonModule
  ],
  exports: [
    BtgVgonzagaComponent, MenuModule, ButtonModule
  ]
})
export class BtgVgonzagaModule { }

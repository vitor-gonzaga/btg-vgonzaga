import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BtgVgonzagaModule } from 'btg-vgonzaga';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemAModule } from './item-a/item-a.module';
import { ItemBModule } from './item-b/item-b.module';
import { ItemCModule } from './item-c/item-c.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ItemAModule,
    ItemBModule,
    ItemCModule,
    BtgVgonzagaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BtgVgonzagaModule } from 'btg-vgonzaga';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BtgVgonzagaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

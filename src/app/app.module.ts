import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HojavidaModule } from './hojavida/hojavida.module';
import { LoginModule } from './login/login.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    PrimeNgModule,
    HojavidaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

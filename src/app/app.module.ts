import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/components/header/header.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, DefaultLayoutComponent, HeaderComponent],
  imports: [BrowserModule, SharedModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

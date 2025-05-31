import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { App } from './app';
import { authConfig } from './auth/auth.config';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AuthModule.forRoot(authConfig)
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { } 
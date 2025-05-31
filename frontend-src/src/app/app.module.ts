import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';
import { App } from './app';
import { authConfig } from './auth/auth.config';
import { routes } from './app.routes';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AuthModule.forRoot(authConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { } 
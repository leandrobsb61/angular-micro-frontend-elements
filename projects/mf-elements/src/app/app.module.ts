import { APP_BASE_HREF } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Platform } from '@angular/cdk/platform';

import { HomeModule } from './elements/home/home.module';

@NgModule({
  imports: [
    BrowserModule,

    HomeModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    },
    Platform
  ]
})
export class AppModule {
  ngDoBootstrap() { }
}

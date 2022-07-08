import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    HomeComponent
  ]
})
export class HomeModule {

  constructor(private injector: Injector) {
    const el = createCustomElement(HomeComponent, { injector: this.injector });
    customElements.define('home-element', el);
  }

  ngDoBootstrap() { }
}

import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Sidebar } from './layouts/sidebar/sidebar';
import { Client } from './module/client/client';
import { Communication } from './module/communication/communication';
import { Person } from './module/person/person';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    App,
    Sidebar,
    Client,
    Communication,
    Person,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule


  ],
  providers: [
    provideBrowserGlobalErrorListeners()
    
  ],
  bootstrap: [App]
})
export class AppModule { }



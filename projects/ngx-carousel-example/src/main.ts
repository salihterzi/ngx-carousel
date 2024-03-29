import {enableProdMode, importProvidersFrom} from '@angular/core';
import { environment } from './environments/environment';
import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom([BrowserAnimationsModule])]
}).catch(e => console.error(e));

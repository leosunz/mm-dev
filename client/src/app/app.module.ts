import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { UrlService } from './core/services/url.service';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomErrorHandler } from './core/custom-error-handler';
import { MatSnackBarModule } from '@angular/material';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import localeSv from '@angular/common/locales/sv';
import localeSvExtra from '@angular/common/locales/extra/sv';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeSv, 'sv-SE', localeSvExtra);

const googleMapsParams = {
  apiKey: 'AIzaSyCsvDLTWRHJd-g5myDdykTnMFPqcnuSMwI', // TODO
  libraries: ['drawing', 'places'],
  language: 'sv',
  region: 'SE',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebase, 'my-mechanic-dev'),
    // AngularFirestoreModule.enablePersistence(),
    BrowserAnimationsModule,
    MatSnackBarModule,
    GraphQLModule,
    HttpClientModule,
    AgmCoreModule.forRoot(googleMapsParams),
    MatGoogleMapsAutocompleteModule.forRoot(),
  ],
  providers: [
    UrlService,
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

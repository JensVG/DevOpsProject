//Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

//PrimeNG
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar'

//Componenten
import { AppComponent } from './app.component';
import { StartPaginaComponent } from './startpagina/startpagina.component';
import { SpelerComponent } from './speler/speler.component';
import { PloegComponent } from './ploeg/ploeg.component';
import { NavigatieComponent } from './navigatie/navigatie.component';

export const config = {
  firebase: {
    apiKey: "AIzaSyA5ZdWAujCl4MildcY5rBFeaYJJD1TH8Ig",
    authDomain: "projectcloudapi-277318.firebaseapp.com",
    databaseURL: "https://projectcloudapi-277318.firebaseio.com",
    projectId: "projectcloudapi-277318",
    storageBucket: "projectcloudapi-277318.appspot.com",
    messagingSenderId: "395258231179",
    appId: "1:395258231179:web:dcf9b49b7bcb2bde7e578e",
    measurementId: "G-93V7Y5HZBW"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    StartPaginaComponent,
    SpelerComponent,
    PloegComponent,
    NavigatieComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule, 
    OAuthModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'login',
        component: NavigatieComponent
      },
      {
        path: 'start',
        component: StartPaginaComponent
      },
      {
        path: 'spelers',
        component: SpelerComponent
      },
      {
        path: 'ploegen',
        component: PloegComponent
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "login"
      },
      {
        path: "*",
        redirectTo: "login"
      }],
      {
        useHash: true
      }),
  PanelModule,
  ButtonModule,
  ToolbarModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

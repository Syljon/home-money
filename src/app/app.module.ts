import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { UserStoreModule } from './store';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './modules/registration-page/registration-page.component';
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    DashboardComponent
  ],
  imports: [StoreModule.forRoot({}, {
    runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true
    }
  }),
  StoreDevtoolsModule.instrument({
    name: 'truckflow',
    maxAge: 50,
    logOnly: environment.production
  }),
    UserStoreModule,
  AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  EffectsModule.forRoot([]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

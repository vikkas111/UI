import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angular5-social-login';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [{
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('190506228435014')
    },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('832976957531-ufljq94h91ej37l3an2ouprfm4pmcmt7.apps.googleusercontent.com')
      },
    ]
  );
  return config;
}

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
],
  imports: [
    BrowserModule,
    SocialLoginModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

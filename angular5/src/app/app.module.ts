import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from "angular5-social-login";
import { HttpModule } from '@angular/http';
import { TestComponent } from './test/test.component'



export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("644830445854-uf6bge3vs8v77dbp04r5dprth3jo9qpf.apps.googleusercontent.com")
        },
      ]
  )
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    TestComponent
    
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpModule
    
  ],
  providers: [
  
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
      
    }
  ],
  bootstrap: [AppComponent,TestComponent]
})
export class AppModule { }
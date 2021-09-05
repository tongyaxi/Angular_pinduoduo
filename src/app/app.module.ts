import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module.ts.routing';

import { AppComponent } from './app.component';
import { HomeModule, NotificationInterceptor, ParamInterceptor } from './home';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
     useClass: ParamInterceptor,
     multi: true},
    {provide: HTTP_INTERCEPTORS,
     useClass: NotificationInterceptor,
     multi: true
      
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

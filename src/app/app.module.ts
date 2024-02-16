import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register';
import { LoginComponent } from './components/login/login';
import { HotelsModule } from './components/hotels/hotels.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    HotelsModule
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}

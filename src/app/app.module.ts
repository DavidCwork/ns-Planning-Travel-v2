import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import * as appSettings from '@nativescript/core/application-settings';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register';
import { LoginComponent } from './components/login/login';
import { HotelsModule } from './components/hotels/hotels.module';
import { AccountComponent } from './components/account/account'
import { EditAccountComponent } from './components/edit-account/edit-account';
import { HomeComponent } from './components/home/home';
import { DetailsComponent } from './components/details/details';
import { SearchComponent } from './components/search/search';
import { ReserveComponent } from './components/reserve/reserve';
import { ReservaComponent } from './components/account/components/reservas/reserva';

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
    AccountComponent,
    EditAccountComponent,
    HomeComponent,
    DetailsComponent,
    SearchComponent,
    ReserveComponent,
    ReservaComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}

global.localStorage = {
  getItem(key: string) {
    return appSettings.getString(key);
  },
  setItem(key: string, value: string) {
    return appSettings.setString(key, value);
  },
  length: 0,
  clear() {
    return appSettings.clear();
  },
  key(index) {
    return '';
  },
  removeItem(key) {
    return appSettings.remove(key);
  }
}

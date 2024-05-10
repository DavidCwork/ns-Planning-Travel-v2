import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { AccountComponent } from './components/account/account';
import { EditAccountComponent } from './components/edit-account/edit-account';
import { HomeComponent } from './components/home/home';
import { DetailsComponent } from './components/details/details';
import { SearchComponent } from './components/search/search';

const routes: Routes = [
  { path: '', redirectTo: 'edit-account', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'hotels', loadChildren: () => import('./components/hotels/hotels.module').then((m) => m.HotelsModule) },
  { path: 'account', component: AccountComponent },
  { path: 'edit-account', component: EditAccountComponent },
  { path: 'home', component: HomeComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'search', component: SearchComponent}
]

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot(routes),
    HttpClientModule],
  exports: [NativeScriptRouterModule],
 
})
export class AppRoutingModule {}

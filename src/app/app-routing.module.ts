import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { AccountComponent } from './components/account/account';
import { EditAccountComponent } from './components/edit-account/edit-account';

const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'hotels', loadChildren: () => import('./components/hotels/hotels.module').then((m) => m.HotelsModule) },
  { path: 'account', component: AccountComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}

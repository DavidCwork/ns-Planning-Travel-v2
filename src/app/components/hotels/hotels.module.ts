import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { Routes } from '@angular/router';

import { HotelsComponent } from './hotels';
import { CardHotelComponent } from './components/card-hotel/card-hotel';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: HotelsComponent },
]

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [],
  declarations: [
    HotelsComponent,
    CardHotelComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HotelsModule { }


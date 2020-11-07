import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { CitiesTypeaheadComponent } from './cities-typeahead/cities-typeahead.component';
import { DetailedWeatherComponent } from './detailed-weather/detailed-weather.component';
import { LoaderComponent } from "./loader/loader.component";

@NgModule({
  declarations: [
    CitiesTypeaheadComponent,
    DetailedWeatherComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot(),
  ],
  exports: [
    CitiesTypeaheadComponent,
    DetailedWeatherComponent,
    LoaderComponent
  ]
})
export class ComponentsModule { }

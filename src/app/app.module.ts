import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterListComponent } from './dashboard/filter-folder/filter-list/filter-list.component';
import { LaunchListComponent } from './dashboard/launch-list-folder/launch-list/launch-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FilteredDataComponent } from './dashboard/filter-folder/filtered-data/filtered-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FilterListComponent,
    LaunchListComponent,
    FilteredDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterListComponent } from './dashboard/filter-folder/filter-list/filter-list.component';
import { FilteredDataComponent } from './dashboard/filter-folder/filtered-data/filtered-data.component';
import { LaunchListComponent } from './dashboard/launch-list-folder/launch-list/launch-list.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path: '',
      component: LaunchListComponent,
    },{
      path:'FilteredDataComponent',
      component:FilteredDataComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

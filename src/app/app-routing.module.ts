import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirplaneListComponent } from './airplane-list/airplane-list.component';
import { CreateAirplaneComponent } from './create-airplane/create-airplane.component';
import { AirplaneDetailsComponent } from './airplane-details/airplane-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'Airplane', pathMatch: 'full' },
  { path: 'airplanes', component: AirplaneListComponent },
  { path: 'add', component: CreateAirplaneComponent },
  { path: 'airplane', component: AirplaneDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

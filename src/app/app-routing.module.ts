import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FossilsDashboardComponent } from './dashboards/fossils-dashboard/fossils-dashboard.component';
import { StonkDashboardComponent } from './dashboards/stonk-dashboard/stonk-dashboard.component';


const routes: Routes = [
  { path: 'fossils', component: FossilsDashboardComponent },
  { path: 'stonks', component: StonkDashboardComponent },
  { path: '**', component: StonkDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

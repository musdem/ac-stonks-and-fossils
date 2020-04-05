import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ColumnContainerComponent } from './shared/column-container/column-container.component';
import { ServicesComponent } from './services/services.component';
import { StonkDashboardComponent } from './dashboards/stonk-dashboard/stonk-dashboard.component';
import { FossilsDashboardComponent } from './dashboards/fossils-dashboard/fossils-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ColumnContainerComponent,
    ServicesComponent,
    StonkDashboardComponent,
    FossilsDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

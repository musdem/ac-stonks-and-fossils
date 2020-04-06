import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ServicesComponent } from './services/services.component';
import { StonkDashboardComponent } from './dashboards/stonk-dashboard/stonk-dashboard.component';
import { FossilsDashboardComponent } from './dashboards/fossils-dashboard/fossils-dashboard.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ServicesComponent,
    StonkDashboardComponent,
    FossilsDashboardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

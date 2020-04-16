import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { StonkDashboardComponent } from './dashboards/stonk-dashboard/stonk-dashboard.component';
import { FossilsDashboardComponent } from './dashboards/fossils-dashboard/fossils-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastComponent } from './shared/components/toast/toast.component';
import { FossilIdsPipe } from './dashboards/fossils-dashboard/pipes/fossil-ids.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    StonkDashboardComponent,
    FossilsDashboardComponent,
    HeaderComponent,
    MenuComponent,
    ToastComponent,
    FossilIdsPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    FossilIdsPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

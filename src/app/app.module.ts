import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GroupBikeComponent } from './group-bike/group-bike.component';
import { BikeComponent } from './bike/bike.component';
import { RouterModule } from '@angular/router';
import { DataService } from './services/data.service';
import { SummaryPipe } from './common/summary.pipe';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GroupBikeComponent,
    BikeComponent,
    SummaryPipe,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: GroupBikeComponent},
      {path: 'bikes', component: GroupBikeComponent},
      {path: 'bike/:id', component: BikeComponent}
    ])
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

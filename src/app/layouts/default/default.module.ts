import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { BookingComponent } from 'src/app/modules/booking/booking.component';
import { AssociatesComponent } from 'src/app/modules/associates/associates.component';
import { RouterModule } from '@angular/router';
import { ChangepasswordComponent } from 'src/app/modules/changepassword/changepassword.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    AssociatesComponent,
    BookingComponent,
    ChangepasswordComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    HttpClientModule,
    MatPaginatorModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DefaultModule { }

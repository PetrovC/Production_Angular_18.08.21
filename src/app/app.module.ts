import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import { NavComponent } from './components/nav/nav.component';
import { UpdateComponent } from './components/update/update.component';
import { DetailsComponent } from './components/details/details.component';
import { CreateComponent } from './components/create/create.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatSortModule} from '@angular/material/sort'; 

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DetailsComponent,  
    UpdateComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSortModule,
    MatIconModule,
    MatDatepickerModule,
    MatMenuModule,
    MatRippleModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TrackPageComponent } from './pages/track-page/track-page.component';
import { HistoryLogComponent } from './components/history-log/history-log.component';
import { NewEntryComponent } from './components/new-entry/new-entry.component';
import { StateService } from './state.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TrackPageComponent,
    HistoryLogComponent,
    NewEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // angular material
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

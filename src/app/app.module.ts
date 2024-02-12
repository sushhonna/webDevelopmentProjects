import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalculationComponent } from './calculation/calculation.component';
import { FormsModule } from '@angular/forms';
import { AdditionComponent } from './calculation/addition/addition.component';
import { SubstractionComponent } from './calculation/substraction/substraction.component';
import { CharcounterComponent } from './charcounter/charcounter.component';
import { RandomcolorComponent } from './randomcolor/randomcolor.component';
import { GameforkidsComponent } from './gameforkids/gameforkids.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    DashboardComponent,
    CalculationComponent,
    AdditionComponent,
    SubstractionComponent,
    CharcounterComponent,
    RandomcolorComponent,
    GameforkidsComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

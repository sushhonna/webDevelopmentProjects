import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalculationComponent } from './calculation/calculation.component';
import { AdditionComponent } from './calculation/addition/addition.component';
import { SubstractionComponent } from './calculation/substraction/substraction.component';
import { CharcounterComponent } from './charcounter/charcounter.component';
import { RandomcolorComponent } from './randomcolor/randomcolor.component';
import { GameforkidsComponent } from './gameforkids/gameforkids.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clock', component: ClockComponent },
  { path: 'calculation', component: CalculationComponent },
  { path: 'calculation/addition', component: AdditionComponent },
  { path: 'calculation/substraction', component: SubstractionComponent },
  { path: 'charcounter', component: CharcounterComponent },
  { path: 'randomcolor', component: RandomcolorComponent },
  { path: 'gameforkids', component: GameforkidsComponent },
  { path: 'calculator', component: CalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

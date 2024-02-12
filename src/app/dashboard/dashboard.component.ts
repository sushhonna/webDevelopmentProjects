import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router:Router){}
  clock(){
    this.router.navigate(['/clock']);
  }
  calculation(){
    this.router.navigate(['/calculation']);
  }
  charCounter(){
    this.router.navigate(['/charcounter']);
  }
  randomColor(){
    this.router.navigate(['/randomcolor']);
  }
  kidsGame(){
    this.router.navigate(['/gameforkids']);
  }
  calculator(){
    this.router.navigate(['/calculator']);
  }
}

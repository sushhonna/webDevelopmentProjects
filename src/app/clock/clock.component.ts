import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  h: any;
  m: any;
  s: any;
  ampm: any;

  constructor() { }

  ngOnInit() {
      this.updateClock();
  }

  updateClock() {
    this.h = new Date().getHours();
    this.m = new Date().getMinutes();
    this.s = new Date().getSeconds();
    this.ampm = "AM";

    if (this.h > 12) {
      this.h = this.h - 12;
      this.ampm = "PM";
    }

    this.h = this.h < 10 ? "0" + this.h : this.h;
    this.m = this.m < 10 ? "0" + this.m : this.m;
    this.s = this.s < 10 ? "0" + this.s : this.s;

    setTimeout(() => {
      this.updateClock();
    }, 1000)
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charcounter',
  templateUrl: './charcounter.component.html',
  styleUrls: ['./charcounter.component.scss']
})
export class CharcounterComponent implements OnInit {
  enteredValues: any;
  total: any;
  remaining: any;
  maxlength: any = 50;

  constructor() { }

  ngOnInit() {
      this.total = 0;
      this.remaining = this.maxlength;
  }
  countValue() {
    console.log(this.enteredValues.length);
    this.total = this.enteredValues.length;

    this.remaining = this.maxlength - this.total;
  }
}

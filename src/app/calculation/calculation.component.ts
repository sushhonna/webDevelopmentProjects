import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss']
})
export class CalculationComponent implements OnInit {

  constructor(private router:Router) { }

  num1: any;
  num2: any;
  answer: any;
  inputVal: any;
  scoreCount: any = localStorage.getItem('score');

  ngOnInit() {
    this.num1 = Math.ceil(Math.random() * 10);
    this.num2 = Math.ceil(Math.random() * 10);
    this.mul();
  }

  clearScore(){
    this.scoreCount = 0;
  }

  submit() {
    this.answer = this.num1 * this.num2
    console.log(this.answer);
    console.log(this.inputVal);

    this.inputVal = +this.inputVal;
    if (this.answer === this.inputVal) {
      this.scoreCount++;
      this.updateLocalStorage();
      this.inputVal = '';
    } else {
      this.scoreCount--;
      this.updateLocalStorage();
      this.inputVal = '';
    }
    window.location.reload();

  }

  updateLocalStorage() {
    if (!this.scoreCount) {
      this.scoreCount = 0;
    }
    localStorage.setItem("score", JSON.stringify(this.scoreCount));
  }

  mul(){
    this.router.navigate(['/calculation']);
  }
  add(){
    this.router.navigate(['/calculation/addition']);
  }
  sub(){
    this.router.navigate(['/calculation/substraction']);
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-substraction',
  templateUrl: './substraction.component.html',
  styleUrls: ['./substraction.component.scss']
})
export class SubstractionComponent {
  constructor(private router:Router) { }

  num1: any;
  num2: any;
  answer: any;
  inputVal: any;
  scoreCount: any = localStorage.getItem('score');

  ngOnInit() {
    this.num1 = Math.ceil(Math.random() * 10);
    this.num2 = Math.ceil(Math.random() * 10);
  }

  clearScore(){
    this.scoreCount = 0;
  }

  submit() {
    this.answer = Math.abs(this.num1 - this.num2);
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

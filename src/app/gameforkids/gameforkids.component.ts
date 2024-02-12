import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameforkids',
  templateUrl: './gameforkids.component.html',
  styleUrls: ['./gameforkids.component.scss']
})
export class GameforkidsComponent implements OnInit {
  userScore: any = 0;
  computerScore: any = 0;
  msg: any;

  constructor() { }

  ngOnInit(): void {
    this.getValues();
  }

  getValues() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const result = this.playRound(button.id, this.computerPlay());
        console.log(result);
      })
    })
  }

  computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
  }

  playRound(userSelect: any, compSelect: any) {
    this.userScore = 0;
    this.computerScore = 0;
    console.log(userSelect, compSelect);
    if (userSelect === compSelect) {
      this.msg = "It's a tie!";
    } else if ((userSelect === "rock" && compSelect === "scissors")
      || (userSelect === "paper" && compSelect === "rock")
      || (userSelect === "scissors" && compSelect === "paper")) {
      this.userScore++;
      this.msg = "You win! " + userSelect + " beats " + compSelect;
    } else {
      this.computerScore++;
      this.msg = "You lose! " + compSelect + " beats " + userSelect;
    }
  }

}
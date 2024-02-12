import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randomcolor',
  templateUrl: './randomcolor.component.html',
  styleUrls: ['./randomcolor.component.scss']
})
export class RandomcolorComponent implements OnInit {

  colorElements: any;
  colorContainers: any;

  constructor() { }

  ngOnInit(): void {
    this.getAllColors();
    this.gernerateColors();
  }

  getAllColors() {
    const colorEle = document.querySelector(".container");

    for (let index = 0; index < 30; index++) {
      const colorContainerEle = document.createElement("div");
      colorContainerEle.className = ("color-container");
      this.colorElements = colorContainerEle;
      console.log(colorContainerEle);
      console.log(this.colorElements);
      
      colorEle?.appendChild(colorContainerEle); // to append more color boxes
      this.colorContainers = colorEle;
      console.log(this.colorContainers);
      
    }
  }

  gernerateColors() {
    const colorContainerEles = document.querySelectorAll(".color-container");

    colorContainerEles.forEach((colorContainerEle) => {
      const newColorCode = this.randomColor();
      console.log(newColorCode);      // getting new color code here
      // colorContainerEle.style.backgroundColor = "#" + newColorCode;
      colorContainerEle.innerHTML = "#" + newColorCode;

    })
  }

  randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = ""
    for (let i = 0; i < colorCodeLength; i++) {
      const randNum = Math.floor(Math.random() * chars.length);
      colorCode += chars.substring(randNum, randNum + 1);
      console.log(colorCode, randNum);
    }
    return colorCode;
  }


}

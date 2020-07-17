import { Component } from '@angular/core';

@Component({
  selector: 'calc',
  templateUrl: 'calc.component.html',
  styleUrls: ['calc.component.css']
})

export class CalcComponent {
  public number1 : number;
  public number2 : number;
  public result : number;

  public add(){
    this.result = this.number1 + this.number2
  }
  
  public printResult(){
    this.add();
    const spanBox = document.getElementById("showResult");
    spanBox.innerHTML = `Resultado de la suma: ${this.result}`;
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-increment',
  templateUrl: './quantity-increment.component.html',
  styleUrls: ['./quantity-increment.component.css']
})
export class QuantityIncrementComponent implements OnInit {

  constructor() { }
  
  clickMessage :string =""
  clickNumber: number = 0
 
  myClickFunction = () => {
    this.clickMessage  ="Click me button clicked!";
  }

  incrementFunction = () =>{
    this.clickNumber = this.clickNumber+1
    // console.log(value.qty)  
  }

  decrementFunction = () =>{
    this.clickNumber = this.clickNumber-1
    // console.log(value.qty)  
  }
  
  
  ngOnInit(): void {
  }

}

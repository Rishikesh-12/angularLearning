import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee1'

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  emp: Employee [] = [
    {empId:"3",name:"John",salary:10000,permanent:true, date: new Date("12/31/2000"),department:[{id:1,name:"Payroll"}],skill:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"JAVASCRIPT"}]}
  ]
}

import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee1';
import { EMPLOYEES } from '../employee1Mock';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  employees = EMPLOYEES
  filteredEmployees=EMPLOYEES


  func(employee:Employee) {
      console.log(employee);
      
  }

  searchKey:String ='';
  search(){
    if(this.searchKey === ''){
      this.filteredEmployees=this.employees;
    }
    else{
      this.filteredEmployees=this.employees.filter(
        employee => employee.name === this.searchKey
      );
    }
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}

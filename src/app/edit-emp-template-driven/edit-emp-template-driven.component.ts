import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-edit-emp-template-driven',
  templateUrl: './edit-emp-template-driven.component.html',
  styleUrls: ['./edit-emp-template-driven.component.css']
})
export class EditEmpTemplateDrivenComponent implements OnInit {

  emp=new Employee();
  constructor() { }
    id!: number;
    ename!: string;
    esalary!: number;
    eermanent!: boolean;
    departments = [
      { id: 1, name: "Payroll" },
      { id: 2, name: "Internal" },
      { id: 3, name: "HR" }
      ];
    skills!: [
        {
            id: number,
            name: string
        }
    ]
  ngOnInit(): void {
    
  }
  onSubmit(data:any){
    console.warn(data);
  }

}

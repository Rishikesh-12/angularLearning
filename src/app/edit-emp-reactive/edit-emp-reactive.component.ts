import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import { __asyncValues } from 'tslib';
import { Employee } from '../employee';
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent implements OnInit {

  empid!:any;
  emp!:any;
  
  constructor(private fb: FormBuilder,
    private route : ActivatedRoute, private employeeService : EmployeeService) { }

  empForm= this.fb.group({
    name: ['',Validators.required,Validators.minLength(4),Validators.maxLength(20)],
    salary: [''],
    permanent: [''],
    department: [null],
    skill: this.fb.array([
      this.fb.control('')
    ])
  });

  departments = [
    { id: 1, name: "Payroll" },
    { id: 2, name: "Internal" },
    { id: 3, name: "HR" }
  ];

  get name() { return this.empForm.get('name');}

  get skill() {
    return this.empForm.get('skill') as FormArray;
  }

  ngOnInit(): void {
    this.empid = this.route.snapshot.paramMap.get('id');
    console.warn(this.empid);
    this.emp=this.employeeService.getEmployee(this.empid);
    console.warn(this.emp);
  }
  
  addSkills() {
    this.skill.push(this.fb.control(''));
  }
  onSubmit(data:any){
    if(this.emp===null)
    {}
    else
    {
      this.emp.name=data.name;
      this.emp.permanent=data.permanent;
      this.emp.department=data.department;
      this.emp.salary=<number>data.salary;
      let id=3;
      let skil= this.emp.skill;
      data.skill.forEach(function(name:string){
        id=id+1;
        skil.push({id,name});
      });
      this.emp.skill=skil;
    }
  }
}

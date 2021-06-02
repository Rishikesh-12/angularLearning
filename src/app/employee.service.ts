import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList=[
    {
    id: 1,
    name:"John",
    salary:10000,
    permanent:true,
    department: {
      id: 1,
      name: "Payroll"
    },
    skill: [
      {
        id: 1,
        name: "HTML"
      },
      {
        id: 2,
        name: "CSS"
      },
      {
        id: 1,
        name: "JavaScript"
      }
    ]
  },
  {
    id: 2,
    name:"Smith",
    salary:5000,
    permanent:true,
    department: {
      id: 1,
      name: "Payroll"
    },
    skill: [
      {
        id: 1,
        name: "HTML"
      },
      {
        id: 2,
        name: "CSS"
      },
      {
        id: 1,
        name: "JavaScript"
      }
    ]
  },
  {
    id: 3,
    name:"Marcus",
    salary:5000,
    permanent:true,
    department: {
      id: 1,
      name: "Payroll"
    },
    skill: [
      {
        id: 1,
        name: "HTML"
      },
      {
        id: 2,
        name: "CSS"
      },
      {
        id: 1,
        name: "JavaScript"
      }
    ]
  },
  {
    id: 4,
    name:"Mary",
    salary:10000,
    permanent:true,
    department: {
      id: 1,
      name: "Payroll"
    },
    skill: [
      {
        id: 1,
        name: "HTML"
      },
      {
        id: 2,
        name: "CSS"
      },
      {
        id: 1,
        name: "JavaScript"
      }
    ]
  },
  {
    id: 5,
    name:"Prateek",
    salary:20000,
    permanent:true,
    department: {
      id: 1,
      name: "Payroll"
    },
    skill: [
      {
        id: 1,
        name: "HTML"
      },
      {
        id: 2,
        name: "CSS"
      },
      {
        id: 1,
        name: "JavaScript"
      }
    ]
  }
];
  constructor() { }
  getAllEmployees(){
    return this.employeeList;
  }
  getEmployee(employeeId:number){
    console.warn(employeeId);
    let l=this.employeeList.length;
    for (let i = 0; i < l; i++) {
      console.warn(this.employeeList[i]);
      let id=this.employeeList[i].id as number;
      if(id==employeeId){
        console.warn("gajab");
      return this.employeeList[i];
      }
    }
    return null;
  }
}

export class Employee {
  id=3;
  name= "John";
  salary=10000;
  permanent=true;
  department={
    id:1,
    name:"Payroll"
  }
  skill=[
    {
      id:1,
      name:"HTML"
    },
    {
      id:2,
      name:"CSS"
    },
    {
      id:1,
      name:"JavaScript"
    },
  ]
  dob:Date=new Date("2019-04-21");
}

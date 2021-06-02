
import {Employee} from './employee1'


export const EMPLOYEES : Employee[] = [
    {empId:"1",name:"John",salary:10000,permanent:true,date: new Date("12/31/2000"),department:[{id:1,name:"Payroll"}],skill:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"JAVASCRIPT"}]},
    {empId:"2",name:"Smith",salary:12000,permanent:true,date: new Date("12/31/2000"),department:[{id:3,name:"Payment"}],skill:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"JAVASCRIPT"}]},
    {empId:"3",name:"Marcus",salary:14000,permanent:true,date: new Date("12/31/2000"),department:[{id:2,name:"Inventory"}],skill:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"JAVASCRIPT"}]},
    {empId:"4",name:"Mary",salary:16000,permanent:true,date: new Date("12/31/2000"),department:[{id:4,name:"Distribution"}],skill:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"JAVASCRIPT"}]},
    {empId:"5",name:"Steve",salary:18000,permanent:true,date: new Date("12/31/2000"),department:[{id:1,name:"Payroll"}],skill:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"JAVASCRIPT"}]}
]

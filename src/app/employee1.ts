import { Department } from "./department";
import { Skills } from "./skill";

export interface Employee extends Department, Skills{
    empId:String
    name:String;
    salary:number;
    permanent:boolean,
    date: Date
}

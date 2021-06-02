import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEmpComponent } from './view-emp/view-emp.component'
import { EditEmpComponent } from './edit-emp/edit-emp.component'
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component'
import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven/edit-emp-template-driven.component'
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component'
import { EmployeeListComponent } from './employee-list/employee-list.component'
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './auth.guard'
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  { path:'', component: MainpageComponent },
  { path:'view', component: ViewEmpComponent},
  { path:'edit', component: EditEmpComponent},
  { path: 'reactive/:id', component: EditEmpReactiveComponent, canActivate: [AuthGuard] },
  { path:'quantity', component: QuantityIncrementComponent },
  { path:'template', component: EditEmpTemplateDrivenComponent },
  { path:'reactive', component: EditEmpReactiveComponent, canActivate: [AuthGuard] },
  { path:'emp-list', component: EmployeeListComponent },
  { path:'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

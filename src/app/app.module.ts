import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven/edit-emp-template-driven.component';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { UserComponent } from './user/user.component';
import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewEmpComponent,
    EditEmpComponent,
    QuantityIncrementComponent,
    EditEmpTemplateDrivenComponent,
    EditEmpReactiveComponent,
    EmployeeListComponent,
    EmployeeInfoComponent,
    LoginComponent,
    UserComponent,
    MainpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

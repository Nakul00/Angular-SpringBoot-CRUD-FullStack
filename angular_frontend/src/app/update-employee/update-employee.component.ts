import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  [x: string]: any;

  //updateEmployee: any;
  id!: number;
  employee!: Employee;
  
  
  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    });
    
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id,this.employee).subscribe((data: any) => {
      console.log(data);
      this.employee = new Employee();
      this['gotoList']();
      
      
    });
    
    
  }
  onSubmit() {
    //console.log(this.employee);
    //this.saveEmployee();
    
    this.updateEmployee();
    this.employeeService.updateEmployee(this.id, this.employee).subscribe((data: any) => {
      this.goToEmployeeList();
  }),
  console.log(Error);
  
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

}
  



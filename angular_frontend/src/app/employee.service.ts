import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";
  //updateEmployee: any;
  constructor(private httpClient : HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: any): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`,employee);
  }

  getEmployeeById(id: any): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: any, employee: any): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`,employee);
  }

  deleteEmployee(id: any): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }




}

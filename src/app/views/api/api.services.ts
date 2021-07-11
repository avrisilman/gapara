import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";
import { ApiUserManagement } from '../model/api.user-management';
import { ApiLogin } from '../model/api.login';
import { ApiContent } from '../model/api.content';
import { HttpHeaders } from '@angular/common/http';

@Injectable({  
    providedIn: 'root'  
})  
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = '/core-api/';

  signin(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl+'auth/token', user);
  }

  _postUserManagement(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl+'user/', user, {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }

  _putUserManagement(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl+'user/', user, {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }

  getUserId(keyword: String): Observable<any> {
    return this.http.get<any>(this.baseUrl +'user/'+keyword, {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }

  delUserId(keyword: String): Observable<any> {
    return this.http.delete<any>(this.baseUrl +'user/'+keyword, {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }

  delCustomerId(keyword: String): Observable<any> {
    return this.http.delete<any>(this.baseUrl +'customer/'+keyword, {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }

  getEmployee(keyword: String): Observable<any> {
    return this.http.get<any>(this.baseUrl +'employee/?keyword='+keyword+'&page=0&pageSize=10', {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }

  getService(keyword: String): Observable<any> {
    return this.http.get<any>(this.baseUrl +'services/?servicesName='+keyword, {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }

  _postService(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl +'services/', user, {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }

  _detailService(keyword: String): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'services/'+keyword, {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }

  _putService(keyword: String): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl +'services/'+keyword, {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }


  getIncident(keyword: String): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'incident/?keyword='+keyword, {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }

  _detailIncident(keyword: String): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'incident/'+keyword, {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }

  _postIncident(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl +'incident/', user, {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }

  _putIncident(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl +'incident/', user, {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }


  delIncidentId(keyword: String): Observable<any> {
    return this.http.delete<any>(this.baseUrl +'incident/'+keyword, {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }

  getCustomer(keyword: String): Observable<ApiContent> {
    return this.http.get<ApiContent>(this.baseUrl +'customer/paging/?keyword='+keyword+'&page=0&pageSize=10', {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }

  getUser(employeeOrCustomerName: String): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'user/?employeeOrCustomerName='+employeeOrCustomerName, {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }

  getIncidentManagment(keyword: String): Observable<any> {
    return this.http.get<any>(this.baseUrl +'project-incident/paging?keyword='+keyword+'&page=0&pageSize=10', {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }

  getIncidentMonitoring(category: String, customerName: String, incidentType: String, projectName: String, siteName: String, status: String): Observable<any> {
    return this.http.get<any>(this.baseUrl +'incident-report/incident-report-paging?category='+category+'&customerName='+customerName+'&incidentType='+incidentType+'&page=0&pageSize=10&projectName='+projectName+'&siteName='+siteName+'&status='+status, {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }

  _postIncidentMonitoring(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl +'project-incident/', user, {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }

  getIncidentReportingDetail(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'incident-report/incident-report-detail/INCR210600002', {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }

  getSecurityGuard(customerName: String, projectName: String, siteName: String): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'attendance/get-approvalList-security-guard?customerName='+customerName+'&projectName='+projectName+'&siteName='+siteName, {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }

  getSecurityPatrol(customerName: String, projectName: String): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl +'attendance/get-approvalList-security-patrol?customerName='+customerName+'&isWaiting=true&projectName='+projectName, {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }

  _postDataCustomer(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl +'customer/', user, {  headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))});
  }

  _logout(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl+'auth/logout', user);
  }

}
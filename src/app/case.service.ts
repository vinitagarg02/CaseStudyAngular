import { Injectable } from '@angular/core';
import { Property } from './Property';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CaseService {
  private caseUrl: string;
  ssss:string;
  constructor(private http :HttpClient ) {
    this.caseUrl = 'http://localhost:8080/properties';
   }
  
 public postExcelData(property: String):Observable<Property[]> {
   //property = {\"id\": 2,\"jobcode\":\"testttcodeee11\",\"typeCode\":\"testtttttypeeeee\"}";
   console.log(property);
    //this.ssss = {"id": 2, "jobcode":"testttcodeee11", "typeCode":"testtttttypeeeee"};
   let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   return this.http.post<Property[]>(this.caseUrl,property, { headers: headers });
  }

  
 public postExcelDataTest(property: String):Observable<Property[]> {
  //property = {\"id\": 2,\"jobcode\":\"testttcodeee11\",\"typeCode\":\"testtttttypeeeee\"}";
  console.log(property);
   //this.ssss = {"id": 2, "jobcode":"testttcodeee11", "typeCode":"testtttttypeeeee"};
  let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<Property[]>('http://localhost:8080/propertiestest',property, { headers: headers }).pipe(catchError(this.errorHandler));
 }
 
 errorHandler(error: HttpErrorResponse){
  console.log("serviceeee"+error);
  return throwError(error.message || "Server Error");
 }
}

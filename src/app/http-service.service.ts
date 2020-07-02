import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'responseType': 'text'
  })
};

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {

  headers : HttpHeaders;

  constructor(private httpClient: HttpClient) { }

  getRestContent() {  
    return this.httpClient.get('http://localhost:5000/api/autos');
    //return this.httpClient.get('http://localhost:5000/api/autos', {responseType : 'text'});
    //return this.httpClient.get('https://api.openbrewerydb.org/breweries');
  }
}

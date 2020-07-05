import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';


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
    return this.httpClient.get(environment.apiEndpoint + 'api/autos');
  }
}

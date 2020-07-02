import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Automoble } from "../automoble";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.styl']
})
export class ServiceComponent implements OnInit {

  sResult: String = "Hello World, This is Charles! :)";

  autos: Object;

  constructor(private httpService:HttpServiceService) { }

  ngOnInit(): void {
/*
    this.httpService.getRestContent().subscribe(
      (response: any) => {
        this.autos = response;
          console.log(response)
          //location.reload()
      }, 
      (error: any) => {
          console.log(error)
      });
 */
    /*
    console.l.og("*******************"); 
    this.httpService.getRestContent().subscribe(
     (response: any) => {
        console.log(response)
        location.reload()
    }, 
    (error: any) => {
        console.log(error)
    })
*/

      this.httpService.getRestContent().subscribe(data => {
        this.autos = data;
        console.log(this.autos);
      });
  }

  restCall() {
    this.sResult = "Hello Angular, Charles is playing! ... ";
  } 


}

import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie'
import { FileloadService } from '../fileload.service';
import { ReactService } from '../react.service';
import { from } from 'rxjs';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';


@Component({
  selector: 'app-reactx',
  templateUrl: './reactx.component.html',
  styleUrls: ['./reactx.component.styl']
})
export class ReactxComponent implements OnInit {
  records:Array<any> = [];
  subscriber:String;

  constructor(private fileService:FileloadService, private rxService: ReactService) { 
    rxService.loadMovies();
  }

  ngOnInit(): void {
  }
  
  consumeMovies(dataArray:Movie[]) {
    let movies = from(dataArray);;
    let barray:Array<any> = [];
    //const secondsCounter = interval(1000);

    movies.subscribe({
      next(data:any) { 
        barray.push(data);
      },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log("Complete...");}
    });
    
    this.records = barray;
  }

  loadOne() {
    this.subscriber = "One";
    let objects = this.rxService.getMovies();

    let random = Math.floor(Math.random() * (1000)) % 60;

    let movies:Array<Movie> = [];
    for(let i=0; i<20; i++) {
      movies.push(objects[i+random]);
    }
    
    this.consumeMovies(movies);
  }

  loadTwo() {
    this.subscriber = "Two";
    let objects = this.rxService.getMovies();

    let random = Math.floor(Math.random() * (500)) % 40;
  
   let movies:Array<Movie> = [];
    for(let i=0; i<20; i++) {
      movies.push(objects[i+random]);
    }

    this.consumeMovies(movies);
    
  }

  myTest(s:String) {
    window.alert("..." + s);
  }
}

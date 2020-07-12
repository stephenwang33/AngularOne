import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { Observable } from 'rxjs';
import { FileloadService } from './fileload.service';
import { Movie } from './movie';


@Injectable({
  providedIn: 'root'
})
export class ReactService {

  movies:Movie[];

  constructor(private fileService:FileloadService) { }

  loadMovies() {
    this.getText().subscribe(res => {
      let moviesArray = this.setContent(res);
      this.setMovies(moviesArray);
    });    
  }

  setMovies(movieArray:Movie[]) {
    this.movies = movieArray;
  }

  getMovies() : Movie[] {
    return this.movies;
  }

  private setContent(response:any) : Movie[] {
    return  this.readTxtContext(response);
  }

  private getText() : Observable<any> {
    return this.fileService.getCSVFileContent();
  }


  private readTxtContext(response:any) : Movie[] {
    let csvRecordsArray = (<string>response).split(/\r\n|\n/); 
    return this.createRecord(csvRecordsArray);
  }

  private createRecord(csvRecordsArray:any[]) : Movie[] {
    let movies = [];
    for (let i = 0; i<csvRecordsArray.length; i++) {
      let record = (<String>csvRecordsArray[i]).split("|");
      let movie = new Movie();
      movie.id = parseInt(record[0]);
      movie.name = record[1];
      movie.publishedDate = record[2];
      movie.url = record[4]
      movies.push(movie);
      if (i>80) break;  //limitation of loading records
    }
    return movies;
  }
}

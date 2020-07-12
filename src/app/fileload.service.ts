import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FileloadService {

  private url = '../assets/u.txt';;

  constructor(private http: HttpClient) { }

  getCSVFileContent() {
    return this.http.get(this.url, {responseType:'text'});
  }
}

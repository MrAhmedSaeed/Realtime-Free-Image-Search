import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:Http) {}
  title = 'app';
  photoname = ''; 
  imagePath = '';
  
  SearchResult() {
    this.http.get(`https://api.unsplash.com/search/photos?query=${this.photoname}&client_id=${environment.clientId}`)
    .subscribe(
      (res: Response) => {
        const data = res.json();
        this.imagePath = data.results;
      })
  }
}

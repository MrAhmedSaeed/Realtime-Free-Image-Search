import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:Http){}
  title = 'app';
  photoname=''; 
  imagePath='';
  SearchResult(){
    this.http.get("https://api.unsplash.com/search/photos?query="+this.photoname+"&client_id=3c1ba5ab164708afa1cbf349a8fb0edbc2c4108fdf02ac37d1b8ab19b1188e4b")
    .subscribe(
      (res:Response) => {
        const data=res.json();
        console.log(data);
        this.imagePath=data.results;
      })
  }
}

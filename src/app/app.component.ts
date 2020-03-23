import { Component } from '@angular/core';
import { NewsApiServiceService } from './Service/news-api-service.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-app';
  mArticles: Array<any>;
  mSources: Array<any>;
  log = 0;
  showLog = false;

  constructor(private service: NewsApiServiceService){
    console.log('app component constructor called');
  }
  

  ngOnInit() {
    //load articles
    this.service.initArticles().subscribe(data => this.mArticles = data['articles']);
    //load news sources
    this.service.initSources().subscribe(data => this.mSources = data['sources']);
  }

  searchArticles(source) {
    console.log("selected source is: "+ source);
    this.service.getArticleByID(source).subscribe(data => this.mArticles   = data['articles']);
  }
  onShowLog(){
    this.showLog = true;
    return this.log = this.log + 1;
}
ShowCom(){
  document.getElementById("textcomment").style.display = "block";
}
}



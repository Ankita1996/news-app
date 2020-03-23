import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiServiceService {
  count = 0;
// tslint:disable-next-line: variable-name
api_key = '2038a75543f246fd8068335a924fb940';
  constructor(private http: HttpClient) { }
// left side menu with news resources
  initSources() {
      return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
}

// retrives first articles from techCrunch
initArticles() {
  return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
}

//vl get articles by passing some paramters
// tslint:disable-next-line: ban-types
getArticleByID(source: String) {
  return this.http.get('https://newsapi.org/v2/top-headlines?sources='+ source +'&apiKey=' + this.api_key);
}

}

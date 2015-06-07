import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';
import {AppRouter} from 'aurelia-router';

@inject(HttpClient, AppRouter)
export class SessionsList {
  url = "http://localhost:9800/indices/duplicates/search?c=*&count=100&q=type+=+'session'&returnFlatResult=true";
  sessions = [];
  isLoading = false;

  constructor(http, router) {
    this.http = http;
    this.router = router;
  }

  activate() {
    return this.http.get(this.url).then(r => {
      this.isLoading = true;
      var response = JSON.parse(r.response);
      console.log('Response:');
      console.log(response);
      console.log(response.Data);

      this.sessions = [];
      for (var i in response.Data) {
        this.sessions.push(JSON.parse(response.Data[i].sessionproperties));
      }
      console.log(this.sessions);
      this.isLoading = false;
    });
  }

  open(id) {
    console.log('Id' + id);
    this.router.navigate('session/' + id);
  }
}

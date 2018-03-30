import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  sendPlayerName(name) {
    console.log(name)
    return this._http.post('/username', {name: name});
  }

}

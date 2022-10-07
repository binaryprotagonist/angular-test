import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class GalleryService {
  constructor(private http: HttpClient) {}

  loadUser() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((albums) => albums || []));
  }

  loadsingleuser(id){
    return this.http
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .pipe(map((singleuser) => singleuser || []));
  }
}

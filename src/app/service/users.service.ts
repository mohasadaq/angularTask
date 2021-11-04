import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  getUser(){
    const headers = new HttpHeaders({
      "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjM1NjE0OTAwfQ.-NNFZVUpzfOmEkkImkve7G0yVr7c0_K_hmD_6AaeeQ4"
    })

    // console.log(headers);
   return this.http.get("https://jsonplaceholder.typicode.com/users",{headers:headers});

}

getUserPosts(id : number){
  return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
}

}

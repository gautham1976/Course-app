import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private https:HttpClient) { }
  viewTodos=()=>{
    return this.https.get("http://mylinkurcodesapp.herokuapp.com/getcourses")
  }
}

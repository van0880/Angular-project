import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient) { }

    getData<Type>(url: string){
      return this.http.get<Type>(url);
    }

    deleteData(url:string){
      return this.http.delete(url)
    }

    putData<Type>(url:string, value: Type){
      let headers = new HttpHeaders({"Content-type" : "application/json"})
      return this.http.put(url, value, {headers: headers})
    }
    
    postData<Type>(url: string, value: Type){
      let headers = new HttpHeaders({"Content-type" : "application/json"})
      return this.http.post(url, value, {headers: headers})
    }

    loginRequest<Type>(url: string, value: Type){
      let header = new HttpHeaders({"Content-type" : "application/json"})
      return this.http.post(url, value, {headers: header})
    }

 

}

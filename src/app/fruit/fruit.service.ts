import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor( private http: HttpClient) { }
  apiUrl = "http://localhost:3000/fruits/";


  getAll(){
    return this.http.get<Fruit[]>(this.apiUrl);
  }

  createFruit(data:Fruit){
    return this.http.post<Fruit>(this.apiUrl,data);
  }
    editFruit(id:string){
     return this.http.get<Fruit>(this.apiUrl+id);
    }

  updateFruit(data :Fruit) {
     return this.http.put(this.apiUrl+data.id,data);
  }

  delete(idDelete:number){
    return this.http.delete<Fruit>(`${this.apiUrl}${idDelete}`);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'
import { Room } from '../model/Room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private url = "http://localhost:8080/api/v1/rooms";

  constructor(private http: HttpClient) { }

  index(): Observable<any>{
    return this.http.get(this.url);
  }

  show(id: number): Observable<Room>{
    return this.http.get<Room>(`${this.url}/${id}`);
  }

  store(room: Room): Observable<Room>{
    return this.http.post<Room>(this.url, room);
  }
  
  destroy(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}

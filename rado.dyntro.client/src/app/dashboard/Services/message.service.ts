import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message/message-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  public message: Message[] = [];

  getMessages(id: string): Observable<Message[]> {
    return this.http.get<Message[]>(`/api/message/${id}`);
  }

  //addMessage(): Observable<Message> {
  //  return this.http.post<Message>()
  //}
  
}

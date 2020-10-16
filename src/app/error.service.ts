import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {  Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private subject = new Subject<any>();

  constructor() { }
  private updateSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

    update$: Observable<string> = this.updateSubject.asObservable();

    updateMessage(message: string) {        
        this.updateSubject.next(message);
    }

    error(message: any) {
      this.subject.next({ type: 'error', text: message });
      setTimeout(() => {
        this.blank();
      }, 10000);
    }
    blank() {
      this.subject.next();
    }

    getMessage(): Observable<any> {
      return this.subject.asObservable().pipe();
    }
}

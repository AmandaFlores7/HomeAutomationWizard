import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataDevService {
  private devModeBoolSubject = new Subject<boolean>();
  devModeBool$ = this.devModeBoolSubject.asObservable();

  setDevModeBool(value: boolean) {
    this.devModeBoolSubject.next(value);
  }

  constructor() { }
}

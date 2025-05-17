import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {
    data = signal<number>(0);

    increment() {
        this.data.update(value => value + 1);
    }
}

import { HubConnectionBuilder } from './../../node_modules/@microsoft/signalr/src/HubConnectionBuilder';
import { HubConnection } from './../../node_modules/@microsoft/signalr/src/HubConnection';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignalrService {
  private readonly connection: HubConnection;
  constructor() {
    this.connection = new HubConnectionBuilder()
      .withUrl('https://localhost:44318/hubs/todo')
      .build();

    // this.connection.on
  }
}

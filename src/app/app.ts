import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Client } from './client/client.component';
import { Meetings } from './meetings/meetings.component';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,Client,Meetings],
  templateUrl: './app.html',
  styleUrls:['./app.css']
})
export class App {
  title = signal('client-management-app');
}

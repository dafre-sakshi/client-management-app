// import { Component,signal } from '@angular/core';

// @Component({
//   selector: 'app-client',
//   standalone:true,
//   templateUrl: './client.html',
//   styleUrls: ['./client.css']
// })
// export class Client {
// protected readonly clientName = signal('John Doe');
// }

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, CommonModule],   // ✅ Allow forms & *ngFor
  templateUrl: './client.html',
  styleUrls: ['./client.css']
})
export class Client {
  name = '';
  email = '';
  Address = '';
  Password = '';




  clients: any[] = [];

  addClient() {
    if (this.name && this.email && this.Address && this.Password ) {
      this.clients.push({
        name: this.name,
        email: this.email,
        Address: this.Address,
        Password: this.Password
      });
      // clear inputs after add
      this.name = '';
      this.email = '';
      this.Address = '';
      this.Password = '';
    }
  }
}


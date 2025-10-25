// import { Component, Input } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-meetings',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './meetings.html',
//   styleUrls: ['./meetings.css']
// })
// export class Meetings {
//   // Inputs for form
//   topic: '',
//     numberOfPeople: null,
//     startTime: '',
//     client: ''

//   // Clients will be passed from App (parent component)
//   @Input() clients: any[] = [];

//   meetings: any[] = [];

//   addMeeting() {
//     if (this.date && this.time && this.topic && this.client) {
//       this.meetings.push({
//         date: this.date,
//         time: this.time,
//         topic: this.topic,
//         client: this.client
//       });
//       // reset
//       this.date = '';
//       this.time = '';
//       this.topic = '';
//       this.client = '';
//     }
//   }
// }
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meetings',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './meetings.html',
  styleUrls: ['./meetings.css']
})
export class Meetings {
  // Form model for meeting
  meeting = {
    topic: '',
    numberOfPeople: null,
    startTime: '',
    client: ''
  };

  // Clients passed from parent component
  @Input() clients: any[] = [];

  // All scheduled meetings
  meetings: any[] = [];

  // Add new meeting
  addMeeting() {
    if (
      this.meeting.topic &&
      this.meeting.startTime &&
      this.meeting.client
    ) {
      this.meetings.push({ ...this.meeting }); // copy meeting data
      // Reset form
      this.meeting = {
        topic: '',
        numberOfPeople: null,
        startTime: '',
        client: ''
      };
    }
  }
}

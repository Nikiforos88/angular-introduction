import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person = {
    givenName: "Nikiforos",
    surName: "Ioannidis",
    age: 36,
    email: "nioannidis@aueb.gr"
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Nikiforos';

  person = {
    givenName: "Nikiforos",
    surName: "Ioannidis",
    age: 36,
    email: "nioannidis@aueb.gr"
  }
}

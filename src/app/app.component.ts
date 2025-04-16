import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "Manos";

  person = {
    givenName: "Manos",
    surname: "Picharid",
    age: 30,
    email: "manospicharid@aueb.gr"
  }
}

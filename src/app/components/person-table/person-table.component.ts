import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  name = "John"

  person = {
    givenName: "John",
    surname: "Doe",
    age: 20,
    email: "JohnDoe@aueb.gr"
  }
}

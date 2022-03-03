import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  headers = [
    { prop: "id", label: "ID" },
    { prop: "nome", label: "Nome" },
    { prop: "sobrenome", label: "Sobrenome"}
  ]

  title = 'paginate-app';
}

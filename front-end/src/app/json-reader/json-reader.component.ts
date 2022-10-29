import { Component, OnInit } from '@angular/core';
import userData from 'src/assets/_files/user-data.json';

/*interface User {
  userID: number;
  username: string;
  totalLikes: number;
  publications: number;
}*/

/*Se crean dos arreglos, 'users' es un arreglo de objetos que recibe los objetos literales de un JSON userData, cuyos atributos son
(userID: number, username: string, totalLikes: number, publications: numer). Mientras que 'usersID' es un arreglo de que guardará
el ID de los usuarios, por lo tanto es de tipo 'number'.*/
let users = userData;
let usersID: number[] = [];

//Imprimiendo contenido del arreglo 'users', además en la misma iteración se asigna el ID de un objeto a un espacio del arreglo 'usersID'.
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
  usersID[i] = users[i].userID;
}

//Imprimiendo contenido del arreglo 'usersID'.
for (let i = 0; i < usersID.length; i++) {
  console.log(usersID[i]);
}

@Component({
  selector: 'app-json-reader',
  templateUrl: './json-reader.component.html',
  styleUrls: ['./json-reader.component.scss'],
})
export class JsonReaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
}

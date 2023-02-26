import { Component } from '@angular/core';
import { from, of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

//==========================EXAMPLE 1==========================
const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
numbers$.subscribe((value) => console.log(value));

//==========================EXAMPLE 2 - MAP==========================
numbers$
  .pipe(map((value) => value * 2))
  .subscribe((value) => console.log(value));

//==========================EXAMPLE 3 - ARRAY OF USERS==========================
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'Raquel Bondoc', age: 21 },
];

//FROM
const users$ = from(users);
users$.subscribe((user) => console.log(user));

//==========================EXAMPLE 4 - FILTER==========================
users$
  .pipe(filter((user) => user.age > 30))
  .subscribe((user) => console.log(user));

//==========================EXAMPLE 5==========================
users$
  .pipe(
    map((user) => ({
      id: user.id,
      name: user.name.toUpperCase(),
      age: user.age * 2,
    }))
  )
  .subscribe((user) => console.log(user));

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent {}

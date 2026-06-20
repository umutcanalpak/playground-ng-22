import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  mySignalInput = input.required<{ name: string; age: number }>();
}

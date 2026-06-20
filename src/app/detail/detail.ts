import { Component, input } from '@angular/core';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {
  mySignalInput = input.required<{ name: string; age: number }>();
}

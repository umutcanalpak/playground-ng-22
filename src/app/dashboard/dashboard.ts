import { Component } from '@angular/core';
import { Child } from "../child/child";

@Component({
  selector: 'app-dashboard',
  imports: [Child],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  publicString = 'publicString';
 #privateString = 'privateString';

  showHi() {
    console.log('showHi triggered', new Date());
    
    return true;
  }
  
  
  onHeyButtonClick() {
    console.log('onHeyButtonClick triggered', new Date());

  }
}

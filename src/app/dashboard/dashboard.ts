import { Component, effect, OnDestroy, OnInit, Signal, signal } from '@angular/core';
import { Child } from '../child/child';
import { Detail } from '../detail/detail';
import { interval, Observable, startWith, Subscription } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dashboard',
  imports: [Child, Detail],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit, OnDestroy {
  myAge = signal(1);
  myName = signal('qqq');
  publicString = 'publicString';
  #privateString = 'privateString';
  intervalObs$: Observable<number> = new Observable();
  intervalSub: Subscription = new Subscription();
  intervalSig: Signal<number | undefined> = signal(undefined);
  myObj = {
    name: 'mike',
  };

  constructor() {
    // effect(() => {
    //   console.log('this.myAge()', this.myAge());
    // });
    // effect(() => {
    //   console.log('this.myName()', this.myName());
    // });
    // this.intervalObs$ = interval(3000).pipe(startWith(0));
    // this.intervalSub = this.intervalObs$.subscribe((intervalVal) => {
    //   console.log('intervalVal:', intervalVal);
    // });
    // this.intervalSig = toSignal(this.intervalObs$);
    // effect(() => {
    //   console.log('this.intervalSig()', this.intervalSig());
    // });
  }

  ngOnInit(): void {
    // let name = 'forsa';
    // this.myFunc((name = 'patra'));
    // console.log('name:', name);
    // console.log('this.myObj: 111', this.myObj);
    // setTimeout(() => {
    //   this.myObj.name = 'sally';
    //   console.log('this.myObj: 222', this.myObj);
    //   setTimeout(() => {
    //     this.myObj = { name: 'yuri' };
    //     console.log('this.myObj: 333', this.myObj);
    //   }, 3000);
    // }, 3000);

    // this.randomTest();

    // this.interfaceTest();
  }

  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
  }

  interfaceTest(): void {
    interface HaveName {
      name: string;
    }

    interface HaveAge {
      age: number;
    }

    interface HaveNameAge {
      name: string;
      age: number;
    }

    function myFunc(obj: HaveNameAge): void {}

    const myObj = {
      name: 'mike',
      age: 23,
      agea: 23
    };

    myFunc(myObj);
  }

  randomTest() {
    const obj = {
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
    };

    type results = '1' | '2' | '3' | '4' | '5';

    let num: number;
    let key: results;
    let count = 0;
    setInterval(() => {
      num = Math.floor(Math.random() * 5) + 1;
      key = num.toString() as results;

      obj[key]++;

      count++;
      if (count < 999) console.log(obj);
    }, 10);
  }

  updateMyAge() {
    this.myAge.set(2);
    this.myAge.set(3);
    this.myAge.set(4);
    this.myAge.set(5);
  }

  updateMyAgeTo5() {
    this.myAge.set(5);
  }

  updateMyName() {
    this.myName.set('wwwwwwww');
  }

  showHi() {
    // console.log('showHi triggered', new Date());

    return true;
  }

  onHeyButtonClick() {
    console.log('onHeyButtonClick triggered', new Date());
  }

  myFunc(myParam: string) {
    console.log('myParam:', myParam);
  }
}

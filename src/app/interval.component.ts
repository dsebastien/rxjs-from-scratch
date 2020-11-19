import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { Observable, interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { MonitorService } from './monitor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class IntervalComponent implements AfterViewInit {
  obs!: Observable<any>[];

  @ViewChild('myButton')
  myButton: ElementRef<HTMLButtonElement>;

  constructor(private monitor: MonitorService) {}

  // ngOnInit(): void {
  //   const interval$ = interval(1000).pipe(take(10));
  //   this.obs = [interval$];
  // }

  ngAfterViewInit(): void {
    this.monitor.init();

    // Create your Observables and add them to the obs array for rendering.
    const a = interval(2000).pipe(take(3));
    this.obs = [a];
  }

  // ngAfterViewInit(): void {
  //   this.monitor.init();
  // }

  go(): void {
    this.monitor.monitor(...this.obs);
  }
}

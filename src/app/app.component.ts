import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, VERSION, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  constructor(private breakpointObserver: BreakpointObserver) {}
  ngAfterViewInit() {
    this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.close();
        this.sidenav.mode = 'over';
      } else {
        this.sidenav.open();
        this.sidenav.mode = 'side';
      }
    });
  }
}

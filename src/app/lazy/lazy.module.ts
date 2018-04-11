import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-lazy-view',
  template: `<h3>{{message}}</h3>
  <button (click)="increase($event)">clickBtn</button>
  `
})


export class LazyComponent {
  public message = '0';
  count = 0;
  increase($event): void {
    this.count++;
    this.message = 'LazyComponent' + this.count;
    console.log(this.message);
  }
}

@NgModule({
  declarations: [LazyComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyComponent, pathMatch: 'full'}
    ])
  ]
})
export class LazyModule {



}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styles: [`
    .svElement {
      color: green;
    }
    .bpElement {
      color: blue;
    }
  `]
})
export class ServerElementComponent {
  @Input('srvElement') element:{name:string, content:string, type:string};
}

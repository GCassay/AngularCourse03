import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html'
})
export class ServerFormComponent {

  @Output() serverCreated = new EventEmitter<{name:string, content:string}>();
  @Output() blueprintCreated = new EventEmitter<{name:string, content:string}>();
  newServerName = '';
  newServerContent = '';

  addServer(event) {
    this.serverCreated.emit({
      name:this.newServerName,
      content:this.newServerContent
    });
    console.log(this.newServerName);
  }

  addBlueprint(event) {
    this.blueprintCreated.emit({
      name:this.newServerName,
      content:this.newServerContent
    });
    console.log(this.newServerName);
  }

}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html'
})
export class ServerFormComponent {

  @Output('svCreated') serverCreated = new EventEmitter<{name:string, content:string}>();
  @Output() blueprintCreated = new EventEmitter<{name:string, content:string}>();

  newServerContent = '';

  addServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      name:serverNameInput.value, // Local Reference
      content:this.newServerContent
    });
  }

  addBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      name:serverNameInput.value,
      content:this.newServerContent
    });
  }

}

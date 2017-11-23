import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html'
})
export class ServerFormComponent {

  @Output('svCreated') serverCreated = new EventEmitter<{name:string, content:string}>();
  @Output() blueprintCreated = new EventEmitter<{name:string, content:string}>();
  @ViewChild('serverNameInput') Reference2NameInput; // Access Local Reference from TSC

  newServerContent = '';

  addServer(serverNameInput: HTMLInputElement) {
    console.log(this.Reference2NameInput.nativeElement.value); // Access Local Reference from TSC
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

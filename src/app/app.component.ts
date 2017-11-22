import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{name:'Medea',content:'Server content',type:'sv'},{name:'Selene',content:'Another server content',type:'bp'}];

  onServerAdded(serverData:{name:string, content:string}) {
    this.serverElements.push({
      name: serverData.name,
      content: serverData.content,
      type: 'sv'});
  }

  onBlueprintAdded(blueprintData:{name:string, content:string}) {
      this.serverElements.push({
        name: blueprintData.name,
        content: blueprintData.content,
        type: 'bp'});
    }
}

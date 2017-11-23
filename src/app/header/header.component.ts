import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @ContentChild('contentText') contentText: ElementRef; // Local Reference + ng-content

  ngOnInit() {
    console.log(this.contentText.nativeElement.textContent); // Local Reference + ng-content 
  }
}

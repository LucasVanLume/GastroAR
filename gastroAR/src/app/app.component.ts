import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
  
export class AppComponent {
  openAugmentedReality() {
    window.open('http://localhost:8887/', '_blank');
  }
}
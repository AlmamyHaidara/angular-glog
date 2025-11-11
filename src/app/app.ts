import { Component, signal } from '@angular/core';
import { PersonneComponent } from './personne/personne';

@Component({
  selector: 'app-root',
  imports: [PersonneComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('project-app');
}

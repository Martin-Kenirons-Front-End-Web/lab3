import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

@Component({
  selector: 'root-directive', // The selector used in the HTML to reference this component
  imports: [RouterOutlet, AComponent, BComponent], // The components and directives used in this component
  templateUrl: './app.component.html', // The HTML template for this component
  styleUrl: './app.component.css' // The CSS styles for this component
})
export class AppComponent {
  title = 'my-first-app'; // The title of the application
  name:string = 'Martin'; // A sample name property
  age:number = 25; // A sample age property
}

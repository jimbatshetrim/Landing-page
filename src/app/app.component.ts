import { Component } from '@angular/core';
import { FIRST_DESCRIPTION, SECOND_DESCRIPTION } from './misc/app.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landingPage';
  firstContent = FIRST_DESCRIPTION;
  secondContent = SECOND_DESCRIPTION;
}

import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faLinkedin,
  faGithub,
  faYoutube,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css',
})
export class MenuBarComponent {
  faLinkedin: IconDefinition = faLinkedin;
  faGithub: IconDefinition = faGithub;
  faYoutube: IconDefinition = faYoutube;
}

import { Component, OnInit } from '@angular/core';
import { ISocialMedia } from 'src/app/shared/interface/SocialMedia.interface';
import { FontAwesomeIcon } from 'src/app/shared/collection/FontAwesomeIcon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public socialMedia: ISocialMedia[];
  constructor() { }

  ngOnInit(): void {
    this.socialMedia = [
      {
        fontAwesome: FontAwesomeIcon.LinkedIn,
        link: 'https://www.linkedin.com/in/joshuaalzate/'
      },
      {
        fontAwesome: FontAwesomeIcon.Telegram,
        link: 'https://t.me/joshanity17'
      },
      {
        fontAwesome: FontAwesomeIcon.Github,
        link: 'https://github.com/Joshanity17'
      },
      {
        fontAwesome: FontAwesomeIcon.Stackoverflow,
        link: 'https://stackoverflow.com/users/2637261/rich'
      },
      {
        fontAwesome: FontAwesomeIcon.Patreon,
        link: 'https://www.patreon.com/rjalzate'
      },
      {
        fontAwesome: FontAwesomeIcon.Envelope,
        link: 'mailto:josh.alzate17@gmail.com'
      }
    ]
  }

}

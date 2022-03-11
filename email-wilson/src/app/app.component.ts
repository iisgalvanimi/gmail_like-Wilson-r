import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';

import { Email } from './models/email.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-wilson';

  emails : Email[];
  constructor(){
    this.emails = [
      new Email ('ciao@gmail.com', 'ciaoo','ciao come stai?')
    ]
}

  aggiungiEmail(email: HTMLInputElement, oggetto: HTMLInputElement, messaggio: HTMLInputElement){

    this.emails.push(new Email(email.value, oggetto.value, messaggio.value));
    return false;

  }
}

import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-4';
  contacts: {firstName:string,lastName:string,phoneNumber:string,email:string}[]=[];
  contactsService = inject(ContactsService);
  constructor(){}
  ngOnInit(): void{
    this.contacts = this.contactsService.contacts;
  }
}

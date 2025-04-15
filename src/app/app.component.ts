import { Component, inject, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactsService } from './contacts.service';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactComponent, NewContactComponent, ListContactsComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-4';
  contacts: {id:number,firstName:string,lastName:string,phoneNumber:string,email:string}[]=[];
  contactsService = inject(ContactsService);

  constructor(){}

  ngOnInit(): void{
    this.contacts = this.contactsService.contacts;
  }


}

import { Component, inject } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { NewContactComponent } from '../new-contact/new-contact.component';
import { AppComponent } from '../app.component';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-list-contacts',
  imports: [ContactComponent ],
  templateUrl: './list-contacts.component.html',
  styleUrl: './list-contacts.component.css'
})
export class ListContactsComponent {

  contactsService = inject(ContactsService)
  
  contacts = this.contactsService.contacts;
}

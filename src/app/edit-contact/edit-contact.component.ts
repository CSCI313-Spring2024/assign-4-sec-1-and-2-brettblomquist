import { Component, inject, input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-edit-contact',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent {
  id = input.required<number>();
  contactsService = inject(ContactsService);
  contact !: Contact;

  ngOnInit(): void {
    this.contact = this.contactsService.getContactById(this.id());
  }
  
  editContact(id: number, firstName: string, lastName: string, phoneNumber: string, email: string) {
    this.contactsService.editContact(id, firstName, lastName, phoneNumber, email);
  }
}

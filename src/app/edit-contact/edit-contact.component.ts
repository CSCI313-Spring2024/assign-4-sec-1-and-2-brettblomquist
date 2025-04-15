import { Component, inject, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-edit-contact',
  imports: [RouterOutlet],
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
  
}

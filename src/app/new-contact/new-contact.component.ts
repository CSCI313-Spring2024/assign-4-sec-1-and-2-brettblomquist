import { Component, Input } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-new-contact',
  imports: [],
  templateUrl: './new-contact.component.html',
  styleUrl: './new-contact.component.css'
})
export class NewContactComponent {

  @Input() returnToHome!: () => void;

  constructor(private contactsService: ContactsService){}

  addContact(firstName:string, lastName:string, phoneNumber:string, email:string){
    this.contactsService.addContact(firstName, lastName, phoneNumber, email);

  }

}

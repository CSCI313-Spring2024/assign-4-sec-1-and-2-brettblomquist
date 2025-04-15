import { Component, input, Input} from '@angular/core';
import { ContactsService } from '../contacts.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input() contact!: {id:number, firstName:string, lastName:string, phoneNumber:string, email:string}
  @Input() index!: number;
  
  constructor(private contactsService: ContactsService){}
  
  deleteContact(index: number){
    this.contactsService.contacts.splice(index, 1);
  }

  editContact(index: number, firstName: string, lastName: string, phoneNumber: string, email: string){
    this.contactsService.contacts[index].firstName = firstName;
    this.contactsService.contacts[index].lastName = lastName;
    this.contactsService.contacts[index].phoneNumber = phoneNumber;
    this.contactsService.contacts[index].email = email;
}
}

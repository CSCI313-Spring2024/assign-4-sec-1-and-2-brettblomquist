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
  
  deleteContact(id: number){
    this.contactsService.contacts.splice(this.contactsService.getIndexById(id),1);
  }
}

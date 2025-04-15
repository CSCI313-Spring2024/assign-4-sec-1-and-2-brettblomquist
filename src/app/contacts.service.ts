import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { contacts } from './contact-data';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts = contacts;
  constructor() { }

  addContact(firstName: string, lastName: string, phoneNumber: string, email: string){
    const id = this.contacts.length;
    this.contacts.push({id, firstName, lastName, phoneNumber, email})
  }

  editContact(id:number, firstName: string, lastName: string, phoneNumber: string, email: string){
    contacts[id].firstName = firstName;
    contacts[id].lastName = lastName;
    contacts[id].phoneNumber = phoneNumber;
    contacts[id].email = email;
  }

  getContactById(id:number): Contact{
        for(let i = 0; i < contacts.length; i++){
      if(contacts[i].id == id)
        return contacts[i];
    }
    return contacts[0];
  }
}

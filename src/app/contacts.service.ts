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
    let id = 1;
    while (this.idExists(id)){
      id++;
    }
    this.contacts.push({id, firstName, lastName, phoneNumber, email})
    console.log("Added " + id);
  }

  editContact(id: number, firstName: string, lastName: string, phoneNumber: string, email: string){
    const indexToDelete = this.getIndexById(id);
    contacts[indexToDelete].firstName = firstName;
    contacts[indexToDelete].lastName = lastName;
    contacts[indexToDelete].phoneNumber = phoneNumber;
    contacts[indexToDelete].email = email;
    console.log("Edited " + id);
}

  getContactById(id:number): Contact{
        for(let i = 0; i < contacts.length; i++){
      if(contacts[i].id == id)
        return contacts[i];
    }
    return contacts[0];
  }

  getIndexById(id:number): number{
    for(let i = 0; i < contacts.length; i++){
      if(contacts[i].id == id)
        return i;
    }
    return 0;
  }

  idExists(id:number): boolean{
    for(let i = 0; i < contacts.length; i++){
      if(contacts[i].id == id)
        return true;
    }
    return false;
  }
}

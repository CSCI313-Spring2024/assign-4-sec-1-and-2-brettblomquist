import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts = [
    {
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "111-111-1111",
      email: "johndoe@gmail.com"
    },
    {
      firstName: "Jane",
      lastName: "Roe",
      phoneNumber: "222-222-2222",
      email: "janeroe@gmail.com"
    },
    
  ]

  constructor() { }

  addContact(firstName: string, lastName: string, phoneNumber: string, email: string){
    this.contacts.push({firstName, lastName, phoneNumber, email})
  }
}

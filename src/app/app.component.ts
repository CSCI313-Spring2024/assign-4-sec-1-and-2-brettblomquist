import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactsService } from './contacts.service';
import { NewContactComponent } from './new-contact/new-contact.component';
import { Signal } from '@angular/core';
import { ViewService } from './view.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactComponent, NewContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-4';
  contacts: {firstName:string,lastName:string,phoneNumber:string,email:string}[]=[];
  contactsService = inject(ContactsService);
  viewService = inject(ViewService);

  constructor(){}

  ngOnInit(): void{
    this.contacts = this.contactsService.contacts;
  }

  switchView(){
    this.viewService.switchView();
  }


}

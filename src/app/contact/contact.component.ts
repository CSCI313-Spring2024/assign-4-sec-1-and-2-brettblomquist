import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input() contact!: {firstName:string, lastName:string, phoneNumber:string, email:string}
}

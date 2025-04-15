import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  contactState: string = "Add Contact";

  isAddContactVisible = signal<number>(1);
  constructor() { }

  switchView(){
    if (this.isAddContactVisible() == 1){
      this.contactState = "Go Back";
      this.isAddContactVisible.set(2);
    } else if (this.isAddContactVisible() == 2){
      this.contactState = "Add Contact";
      this.isAddContactVisible.set(1);
    }
  }
}

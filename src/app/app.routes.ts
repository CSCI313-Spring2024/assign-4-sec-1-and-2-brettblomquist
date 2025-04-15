import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { AppComponent } from './app.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

export const routes: Routes = [
    {
    path: "",
    component: ListContactsComponent
    },
    {
    path: 'edit-contact/:id',
    component: EditContactComponent
    },
    {
    path: 'new-contact',
    component: NewContactComponent
    }
];

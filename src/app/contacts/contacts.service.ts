import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACTS } from '../data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contacts:Contact[] = CONTACTS;

  public AddContact(c:Contact):void{
    c.id = this.contacts.length + 1;
    this.contacts.push(c)
  }

  public GetById(id:number){
    const contact = this.contacts.find((c)=> c.id === id);
    if(!contact){
      return null;
    }
    console.log(contact)
    return contact;
  }
}

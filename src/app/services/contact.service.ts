import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts:Contact[];

  constructor() {
    this.contacts=[
      {contactId:101,firstName:"kusuma",lastName:"kumari",dob:new Date("1997-04-23"),mobileNumber:"2356987425",alternateMobileNumber:"2147895632",organization:"Management",mailId:"abc@gmail.com"},
      {contactId:102,firstName:"kumari",lastName:"kusuma",dob:new Date("1998-05-20"),mobileNumber:"8795462310",alternateMobileNumber:"2856472313",organization:"project",mailId:"dec@gmail.com"},
      {contactId:103,firstName:"poonam",lastName:"Mervade",dob:new Date("1997-08-24"),mobileNumber:"5246893210",alternateMobileNumber:"8542697410",organization:"team",mailId:"kk@gmail.com"}
      //{contactId:104,firstName:"sri",lastName:"lekha",dob:new Date("1997-04-23")}
    ];
  }

  getAll():Contact[]{
    return this.contacts;
  }

  get(id:number){
    return this.contacts.find((c)=>(c.contactId==id));
  }

  add(contact:Contact){
    this.contacts.push(contact);
  }

  update(contact:Contact){
    let i=this.contacts.findIndex ((c)=>(c.contactId===contact.contactId));
    if(i>-1){
      this.contacts[i]=contact;
    }
  }

    delete(id:number) {
      let i=this.contacts.findIndex((c)=>(c.contactId===id));
      if(i>-1){
        this.contacts.splice(i,1);
      }
    }
  }


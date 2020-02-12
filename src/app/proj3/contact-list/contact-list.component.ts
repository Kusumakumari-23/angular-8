import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts:Contact[];

  constructor(private contactser:ContactService) { 

  }

  ngOnInit() {
    this.contacts=this.contactser.getAll();
  }

  delete(contactId:number){
    if(confirm(`are you sure of deleting contact#${contactId}`)){
      this.contactser.delete(contactId);
    }
  }

}

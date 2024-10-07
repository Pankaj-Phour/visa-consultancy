import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.validation();
  }

  ngOnInit(): void {
  }

  validation() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', Validators.required],
      query: ['', Validators.required],
    })
  }

  submitContactForm() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}

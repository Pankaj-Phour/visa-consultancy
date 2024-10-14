import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup
  constructor(private fb: FormBuilder,private api:ApiService) {
    this.validation();
  }

  ngOnInit(): void {
  }

  validation() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      contact: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    })
  }

  submit(){
      this.api.clientData('/contact',this.contactForm.value).subscribe((next:any)=>{
        console.log("response from api",next);
      })
      setTimeout(() => {
        // this.api.obNotify({
        //   start:true,
        //   code:200,
        //   status:'success',
        //   message:'Details Submitted Successfully'
        // })
        this.contactForm.reset();
        
      }, 1500);
  }
}

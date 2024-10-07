import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  contactForm:FormGroup;
  submitted:boolean = false;
  constructor(private _fb:FormBuilder, private api:ApiService) { }
formValidation(){
  this.contactForm = this._fb.group({
    name:['',Validators.required],
    contact:['',Validators.required],
    email:['',Validators.compose([Validators.email, Validators.required])],
    message:['',Validators.required]
  })
}
  ngOnInit(): void {
    this.formValidation();
  }

  submit(){
    if(this.contactForm.valid){
      this.submitted = true;
      this.api.clientData('/contact',this.contactForm.value).subscribe((next:any)=>{
        console.log("response from api",next);
      })
      setTimeout(() => {
        this.api.obNotify({
          start:true,
          code:200,
          status:'success',
          message:'Details Submitted Successfully'
        })
        this.contactForm.reset();
        this.submitted = false;
        
      }, 1500);
    }
  }

  contact(index:any){
    if(index == 0){
      window.open(`tel:+91 8901089381`,"_blank")
    }
    else if(index == 1){
      window.open("mailTo:sahilgautam311098@gmail.com","_blank")
    }
    else if(index == 2){
      window.open("http://wa.me/918901089381","_blank")
    }
  }

}

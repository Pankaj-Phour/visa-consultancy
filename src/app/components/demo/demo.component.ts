import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  demoForm: FormGroup;

  constructor(private fb: FormBuilder,private _api:ApiService) {
    this.validation();
  }

  ngOnInit(): void {
  }

  validation() {
    this.demoForm = this.fb.group({
      name: ['', Validators.required],
      contact: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    })
  }


  submit(){
      this._api.clientData('/contact',this.demoForm.value).subscribe((next:any)=>{
        console.log("response from api",next);
          this.demoForm.reset();
      })
  }

}

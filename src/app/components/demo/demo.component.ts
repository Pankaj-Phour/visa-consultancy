import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  demoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validation();
  }

  ngOnInit(): void {
  }

  validation() {
    this.demoForm = this.fb.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', Validators.required],
      queryType: ['', Validators.required],
    })
  }

  submitDemoForm() {
    console.log('hello');

    if (this.demoForm.valid) {
      console.log(this.demoForm.value);

    }
  }
}

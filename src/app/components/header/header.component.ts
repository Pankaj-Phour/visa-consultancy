import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { title } from 'process';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  bandForm:FormGroup;

  links = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About Us',
      link: '/about-us'
    },
    {
      title: 'IELTS/PTE',
      link: ''
    },
    {
      title: 'Study Abroad',
      link: ''
    },
    {
      title: 'Australia PR Process',
      link: '/australia-pr'
    },
    {
      title: 'Study Material',
      link: '/demo'
    },
    {
      title: 'News',
      link: '/news'
    },
    {
      title: 'Blogs',
      link: '/blogs'
    },
    {
      title: 'Contact',
      link: '/contact-us'
    },
    // {
    //   title: 'Login',
    //   link: '/contact-us'
    // },
  ]

  whyUsLinks = [
    {
      link: 0,
      title: 'Why us - for IELTS'
    },
    {
      link: 1,
      title: 'Why us - for Study Visa'
    },
    {
      link: 2,
      title: 'Why us - for PR'
    },
    {
      link: 3,
      title: 'Why us - for PTE'
    },
    {
      link: 4,
      title: 'Best college/University List'
    },
  ]


  ieltsLinks = [
    {
      link: 0,
      title: 'Tips And Tricks'
    },
    {
      link: 1,
      title: 'Free Demo'
    },
    {
      link: 2,
      title: 'Free Mock Test'
    },
    {
      link: 3,
      title: 'Online Coaching'
    },
    {
      link: 4,
      title: 'Single Module Training'
    },
    {
      link: 5,
      title: 'Buy Practice Material'
    },
    {
      link: 6,
      title: 'Book IELTS Test'
    },
  ];

  bandValues:any = {
    listening:{0:0,1:1,2:1.5,3:2,4:2.5,5:2.5,6:3,7:3,8:3.5,9:3.5,10:3.5,11:4,12:4,13:4.5,14:4.5,15:4.5,16:5,17:5,18:5,19:5,20:5.5,21:5.5,22:5.5,23:5.5,24:6,25:6,26:6,27:6.5,28:6.5,29:6.5,30:7,31:7,32:7.5,33:7.5,34:7.5,35:8,36:8,37:8.5,38:8.5,39:9,40:9},
    general_reading:{0:0,1:1,2:1.5,3:2,4:2.5,5:2.5,6:3,7:3,8:3.5,9:3.5,10:4,11:4,12:4,13:4.5,14:4.5,15:5,16:5,17:5,18:5,19:5.5,20:5.5,21:5.5,22:5.5,23:6,24:6,25:6,26:6,27:6.5,28:6.5,29:6.5,30:7,31:7,32:7,33:7.5,34:7.5,35:8,36:8,37:8.5,38:8.5,39:9,40:9},
    academic_reading:{0:0,1:1,2:1.5,3:2,4:2,5:2.5,6:2.5,7:2.5,8:3.5,9:3,10:3,11:3.5,12:3.5,13:3.5,14:3.5,15:4,16:4,17:4,18:4,19:4.5,20:4.5,21:4.5,22:4.5,23:5,24:5,25:5,26:5,27:5.5,28:5.5,29:5.5,30:6,31:6,32:6.5,33:6.5,34:7,35:7,36:7.5,37:7.5,38:8,39:8.5,40:9},
  }


  studyLinks: any;
  bandValue:any;

  validation(){
    this.bandForm = this._fb.group({
        listening : new FormControl('',Validators.required),
        general_reading : new FormControl('',Validators.required),
        academic_reading : new FormControl('',Validators.required),
        
    })
  }

  constructor(private api: ApiService, private router: Router,private _fb:FormBuilder) {
    this.studyLinks = this.api.footerLinks
  }

  ngOnInit(): void {
    this.validation();
  }

  getWhyUsType(type: any) {
    let param = type;
    if (type === 0) {
      this.router.navigate(['/ielts'])
    }
    else if (type === 4) {
      this.router.navigate(['/colleges'])
    } else {
      this.router.navigate(['/why-us'], {
        queryParams: {
          type: param
        }
      })
    }
  }

  getIeltsType(type: any) {
    if (type === 0) {
      this.router.navigate(['/blogs'])
    } else {
      this.router.navigate(['/demo'])
    }
  }


  contact(index:any){
    if(index == 0){
      window.open(`tel:+91 8901089381`,"_blank")
    }
    else if(index == 1){
      window.open("mailTo:admission@visasguruimmigration.com","_blank")
    }
    else if(index == 2){
      window.open("http://wa.me/918901089381","_blank")
    }
  }


  calculateBand(){
    this.bandValue = this.bandForm.value;
  }


}

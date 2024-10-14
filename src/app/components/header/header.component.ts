import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { title } from 'process';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


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
  ]


  studyLinks: any

  constructor(private api: ApiService, private router: Router) {
    this.studyLinks = this.api.footerLinks
  }

  ngOnInit(): void {
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




}

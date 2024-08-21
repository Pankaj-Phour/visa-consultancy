import { Component, OnInit } from '@angular/core';

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
      title: 'IELTS',
      link: ''
    },
    {
      title: 'Study Abroad',
      link: ''
    },
    {
      title: 'Study Material',
      link: ''
    },
    {
      title: 'Awards',
      link: ''
    },
    {
      title: 'Achievements',
      link: ''
    },
    {
      title: 'News',
      link: ''
    },
    {
      title: 'Franchise',
      link: ''
    },
    {
      title: 'Blogs',
      link: ''
    },
    {
      title: 'Contact',
      link: '/contact-us'
    },
    {
      title: 'Login',
      link: '/contact-us'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }




}

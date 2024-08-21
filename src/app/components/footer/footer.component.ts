import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerLinks = [
    {
      title: "Study in Canada",
      link: ""
    },
    {
      title: "Study in Australia",
      link: ""
    },
    {
      title: "Study in New Zealand",
      link: ""
    },
    {
      title: "Study in USA",
      link: ""
    },
    {
      title: "Study in UK",
      link: ""
    },
    {
      title: "Study in Europe",
      link: ""
    },
    {
      title: "Study in Singapore",
      link: ""
    },
    {
      title: "SOP Services",
      link: ""
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

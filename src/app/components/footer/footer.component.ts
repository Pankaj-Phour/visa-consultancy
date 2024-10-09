import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerLinks: any;
  constructor(private api: ApiService) {
    this.footerLinks = this.api.footerLinks;
  }

  ngOnInit(): void {
  }

}

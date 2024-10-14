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

}

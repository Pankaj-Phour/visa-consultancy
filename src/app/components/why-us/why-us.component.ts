import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent implements OnInit {

  whyUsDetails: any;
  headingTitle: any;

  constructor(private api: ApiService, private routes: ActivatedRoute) {
    this.routes.queryParams.subscribe((param: any) => {
      if (param.type == 1) {
        this.headingTitle = 'Study Visa';
        this.whyUsDetails = this.api.whyUsDetails[0];
      }
      else if (param.type == 2) {
        this.headingTitle = 'PR';
        this.whyUsDetails = this.api.whyUsDetails[1]
      } else if (param.type == 3) {
        this.headingTitle = 'Study Visa';
        this.whyUsDetails = this.api.whyUsDetails[2]
      }
    })

  }

  ngOnInit(): void {
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

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
  ];

    // Declaring behaviour subjects here 
    private _notify = new BehaviorSubject<any>({status: 'success', message: 'message', start: false, code: 200});
    notify$ = this._notify.asObservable();
  
    obNotify(data: any): void {
      // console.log(data);
      
      this._notify.next(data);
    }
  
    clientData(endpoint:any,params:any){
      return this.http.post(environment.Url + endpoint,params)
    }
}

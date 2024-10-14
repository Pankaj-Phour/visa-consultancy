import { CollegeListComponent } from './components/college-list/college-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { DemoComponent } from './components/demo/demo.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { IeltsComponent } from './components/ielts/ielts.component';
import { AustraliaComponent } from './components/australia/australia.component';
import { CanadaComponent } from './components/canada/canada.component';
import { EuropeComponent } from './components/europe/europe.component';
import { NewZealandComponent } from './components/new-zealand/new-zealand.component';
import { SingaporeComponent } from './components/singapore/singapore.component';
import { SopServicesComponent } from './components/sop-services/sop-services.component';
import { UkComponent } from './components/uk/uk.component';
import { UsaComponent } from './components/usa/usa.component';
import { AustraliaPrComponent } from './components/australia-pr/australia-pr.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutComponent
  },
  {
    path: 'why-us',
    component: WhyUsComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'ielts',
    component: IeltsComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: 'colleges',
    component: CollegeListComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'australia-pr',
    component: AustraliaPrComponent
  },
  {
    path: 'study-in-australia',
    component: AustraliaComponent
  },
  {
    path: 'study-in-canada',
    component: CanadaComponent
  },
  {
    path: 'study-in-europe',
    component: EuropeComponent
  },
  {
    path: 'study-in-newzealand',
    component: NewZealandComponent
  },
  {
    path: 'study-in-singapore',
    component: SingaporeComponent
  },
  {
    path: 'sop-services',
    component: SopServicesComponent
  },
  {
    path: 'study-in-uk',
    component: UkComponent
  },
  {
    path: 'study-in-usa',
    component: UsaComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

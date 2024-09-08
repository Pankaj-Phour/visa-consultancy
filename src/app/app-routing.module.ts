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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

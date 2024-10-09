import { UsaComponent } from './components/usa/usa.component';
import { UkComponent } from './components/uk/uk.component';
import { SopServicesComponent } from './components/sop-services/sop-services.component';
import { SingaporeComponent } from './components/singapore/singapore.component';
import { NewZealandComponent } from './components/new-zealand/new-zealand.component';
import { EuropeComponent } from './components/europe/europe.component';
import { CanadaComponent } from './components/canada/canada.component';
import { AustraliaComponent } from './components/australia/australia.component';
import { CollegeListComponent } from './components/college-list/college-list.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { DemoComponent } from './components/demo/demo.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { IeltsComponent } from './components/ielts/ielts.component';
import { StudyComponent } from './components/study/study.component';
import { AustraliaPrComponent } from './components/australia-pr/australia-pr.component';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactUsComponent,
    CollegeListComponent,
    WhyUsComponent,
    DemoComponent,
    BlogsComponent,
    IeltsComponent,
    StudyComponent,
    AustraliaPrComponent,
    AustraliaComponent,
    CanadaComponent,
    EuropeComponent,
    NewZealandComponent,
    SingaporeComponent,
    SopServicesComponent,
    UkComponent,
    UsaComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

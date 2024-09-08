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
import { NotifyComponent } from './components/notify/notify.component';
import { NotificationComponent } from './components/notification/notification.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
    NotifyComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

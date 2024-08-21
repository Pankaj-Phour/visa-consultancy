import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  banners = ["assets/images/banner1.jpg", "assets/images/banner2.jpg", "assets/images/banner3.jpg", "assets/images/banner4.jpg", "assets/images/banner5.jpg", "assets/images/banner6.jpg", "assets/images/banner7.jpg"]
  blogs = [
    {
      img: 'assets/images/blog1.jpg',
      title: 'What makes Spearhead the best IELTS institute in Mohali',
      description: 'The popularity of the IELTS exam has skyrocketed in the past decade. As plenty of students are opting for this exam, many institutes started giving IELTS coaching in Mohali. Talking about Punjab only, there are hundreds of institutes claiming to provide the best IELTS coaching. While some are genuinely good, a few are only there to astray students. The question now arises, how can one choose the best IELTS institute in Mohali out of the pool of institutes in every nook and corner?',
      author: 'By Admin'
    },
    {
      img: 'assets/images/blog2.jpg',
      title: 'How to choose the best institute for IELTS coaching in Mohali',
      description: 'With the skyrocketing popularity of the IELTS exam, the number of institutes preparing students for the exam also increased. There are plenty of institutes for IELTS coaching in Mohali that making a choice gets overwhelming for students. Understand that not every institute that opens with big marketing gimmicks offers quality education. There have to be some set standards and few considerations that can help make the right decision in order to design a better future.',
      author: 'By Admin'
    },
    {
      img: 'assets/images/blog3.jpg',
      title: 'Factors on which your IELTS speaking score depends',
      description: 'IELTS is a combination of four modules: Speaking, Writing, Listening, and Reading. Each module is equally important, but students often get scared of the speaking module. Sometimes it is because they are not proficient in speaking skills, but most of the time it is the lack of confidence. The fact that one has to answer questions in front of an official, dreads the candidates even more.',
      author: 'By Admin'
    },
    {
      img: 'assets/images/blog4.jpg',
      title: 'These Steps Can Save Your Canadian Student Visa From Rejection: Spearhead International',
      description: 'The number of rejections in Canadian Student Visa applications is rising day by day due to various reasons including',
      author: 'By Admin'
    },
    {
      img: 'assets/images/blog5.jpg',
      title: 'Tips‌ ‌and‌ ‌Tricks‌ ‌to‌ ‌get‌ ‌a‌ ‌good‌ ‌IELTS‌ ‌score‌ ‌',
      description: 'IELTS is a popular test conducted to check the proficiency in English of a non-native English speaker. According to a study, millions of students take this language eligibility test every year. Because of the rising competition, it gets challenging for students to get good scores on this test. A lower IELTS score acts as a hurdle in the path of students planning to study abroad, decreasing their overall profile weightage.',
      author: 'By Admin'
    },
    {
      img: 'assets/images/blog6.png',
      title: 'Things to keep in Mind before coming to Canada as an International Student',
      description: 'coming to Canada on a study visa, a student must be aware of the taxation system of Canada and be well aware of the related terminology which he is going to strike almost every day while making monetary transactions or dealings. Another thing that he should be aware of is the timing of taxation, because after the due date he may have to face penalties. ',
      author: 'By Admin'
    },
  ]

  ngOnInit(): void {
  }

}

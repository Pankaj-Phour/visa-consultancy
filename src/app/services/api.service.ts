import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  footerLinks = [
    {
      title: "Study in Canada",
      link: "/study-in-canada"
    },
    {
      title: "Study in Australia",
      link: "/study-in-australia"
    },
    {
      title: "Study in New Zealand",
      link: "/study-in-newzealand"
    },
    {
      title: "Study in USA",
      link: "/study-in-usa"
    },
    {
      title: "Study in UK",
      link: "/study-in-uk"
    },
    {
      title: "Study in Europe",
      link: "/study-in-europe"
    },
    {
      title: "Study in Singapore",
      link: "/study-in-singapore"
    },
    {
      title: "SOP Services",
      link: "/sop-services"
    }
  ]

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

  news = [
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

  whyUsDetails = [
    {
      title: "Study Visa",
      img: "https://www.spearheadeducation.com/img/studyvisa.jpg",
      points: [
        'Best SOP (Statement of Purpose) Writing Services',
        'Tie-ups with Top Colleges/Universities Globally',
        'Zero Application Fees on Select Programs',
        'Nominal Consulting Fees for PR and Study Visa Services',
        'Conditional Offer Letters',
        'Transparent Process with No Hidden Charges',
        'All Fees Payable Post-Visa Approval',
        'Open Work Permit for Spouses',
        'Study Abroad Without IELTS',
        'Comprehensive College/University List'
      ]
    },
    {
      title: "PR",
      img: "https://www.spearheadeducation.com/img/pr.jpg",
      points: [
        'Personalized PR Pathway Planning',
        'Assistance with Skill Assessment',
        'Professional Guidance for Visa Subclass Selection',
        'Help with Gathering Required Documents',
        'Express Entry and PNP Application Support',
        'Sponsorship Visa Guidance',
        'Affordable PR Consulting Fees',
        'Transparent Process with No Hidden Charges',
        'Post-PR Settlement Services',
        'Job Assistance After PR Approval'
      ]
    },
    {
      title: "PTE",
      img: "https://www.spearheadeducation.com/img/studyvisa.jpg",
      points: [
        'Expert PTE Coaching by Certified Trainers',
        'Customized Practice Materials & Study Plans',
        'Complete Training in Listening, Reading, Writing, and Speaking',
        'Free Mock Tests with Detailed Feedback',
        'Extra Grammar & Speaking Support',
        'Proven Success in Achieving High Scores',
        'Flexible Online Classes',
        'Regular Progress Tracking',
        'Exclusive Discount on PTE Exam (Voucher Available)'
      ]
    }
  ];

}

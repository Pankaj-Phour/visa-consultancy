import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  banners = ["assets/images/banner1.jpeg", "assets/images/banner2.jpg", "assets/images/banner3.jpg", "assets/images/banner4.jpg", "assets/images/banner5.jpg", "assets/images/banner6.jpg", "assets/images/banner7.jpg"]
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

  pathways = [
    {
      img: 'assets/images/pathway1.jpg',
      title: 'Accounting',
      description: 'Accountancy or Accounting, one of Australia’s most popular courses, has always been an essential part of the skilled occupations list as recommended by immigration in the country.',
    },
    {
      img: 'assets/images/pathway2.jpg',
      title: 'Automotive Engineering',
      description: 'If your field of interest and fascination is cars or how they work, then an academic degree followed by a professional career in the automotive industry might be the answer.',
    },
    {
      img: 'assets/images/pathway3.jpg',
      title: 'Building & Construction',
      description: 'Nowadays, being an expert in any trade can be a key factor that helps you earn competitive and higher salaries than possible otherwise.',
    },
    {
      img: 'assets/images/pathway4.jpg',
      title: 'Childhood Education & Care',
      description: 'Education is, as it should be, a most crucial career field; because working in this area of expertise brings with it the power to shape future generations.',
    },
    {
      img: 'assets/images/pathway5.jpg',
      title: 'Food & Hospitality Management‌',
      description: 'A career in the cookery industry can be extremely challenging and adventurous at the same time. A rewarding career in Australia’s fast-paced …',
    },
    {
      img: 'assets/images/pathway6.jpg',
      title: 'Information Technology',
      description: 'Irrespective of the point in time you decide to choose Australia as a destination, there are multitudes of options that you could opt for in the field of Information Technology (IT).',
    },
  ]

  whyUs = [
    {
      img: 'assets/images/icon2.png',
      title: 'Prime Faculty',
      description: 'Certified Trainers : Listening (8), Writing (7), Speaking (7), Reading(7) or more bands.'
    },
    {
      img: 'assets/images/icon1.png',
      title: 'Latest Material',
      description: 'Practice on Actual Tests, Free Cambridge Books'
    },
    {
      img: 'assets/images/icon4.png',
      title: 'Best Results',
      description: '80% Success Rate, Additional Grammer and Speaking classes.'
    },
    {
      img: 'assets/images/icon3.png',
      title: 'Individual Attention',
      description: 'Detailed Assessment, Comprehensive and Intensive Mock Test Feedback.'
    },
  ]

  whyUsDetails = [
    {
      title: "Why Spearhead For Study Visa ?",
      img: "https://www.spearheadeducation.com/img/studyvisa.jpg",
      points: [

        'Original & The Best SOP (Statement of Purpose)',

        'Tie-ups with Top Colleges/Universities of Canada, UK, Australia, New-Zealand, Singapore & Europe',

        'Zero Application fee options',

        'Nominal PR and Study Visa Consulting fee',

        'Conditional Offer letter',

        'No Hidden Charges',

        'All fee after Visa Options',

        'Open work permit for Spouse',

        ' Without IELTS Options',

        'College/University List']
    },
    {
      title: "Why Spearhead For PR ?",
      img: "https://www.spearheadeducation.com/img/pr.jpg",
      points: [

        'Original & The Best SOP (Statement of Purpose)',

        'Tie-ups with Top Colleges/Universities of Canada, UK, Australia, New-Zealand, Singapore & Europe',

        'Zero Application fee options',

        'Nominal PR and Study Visa Consulting fee',

        'Conditional Offer letter',

        'No Hidden Charges',

        'All fee after Visa Options',

        'Open work permit for Spouse',

        ' Without IELTS Options',

        'College/University List']
    },
    {
      title: "Why Spearhead For PTE ?",
      img: "https://www.spearheadeducation.com/img/studyvisa.jpg",
      points: [

        'Original & The Best SOP (Statement of Purpose)',

        'Tie-ups with Top Colleges/Universities of Canada, UK, Australia, New-Zealand, Singapore & Europe',

        'Zero Application fee options',

        'Nominal PR and Study Visa Consulting fee',

        'Conditional Offer letter',

        'No Hidden Charges',

        'All fee after Visa Options',

        'Open work permit for Spouse',

        ' Without IELTS Options',

        'College/University List']
    },
  ]


  testimonials = [
    [
      {
        img: 'assets/images/client/1.jpeg',
        title: 'Dikshant Rathee',
        description: "Visa Guru Immigration is the best platform for enhancing your learning and boosting your confidence in visa-related processes. I enrolled to improve my understanding of the immigration system and to gain confidence in handling visa applications. The online classes are extremely helpful. Special thanks to the team at Visa Guru Immigration for their exceptional guidance and support. They have truly helped me achieve my goals. I can't thank them enough for their continuous encouragement and expert advice.",
      },
      {
        img: 'assets/images/client/2.jpeg',
        title: 'Tannu jangra',
        description: 'Visa Guru Immigration is the best online platform for IELTS preparation. The trainers provide personalized guidance and focus on improving every aspect of the language. I am grateful to the team for helping me achieve my desired IELTS score.',
      },
      {
        img: 'assets/images/client/3.jpeg',
        title: 'Prikshit Kundu',
        description: "It's a fantastic place if you're looking to prepare for PTE. The curriculum and materials are designed to make it easier for you to learn faster and more effectively. The best part is that the administration is highly cooperative and always ready to answer any queries you may have. Special thanks to Sahil Sharma, who consistently encouraged me to speak in English, helping me overcome my hesitation.",
      },
    ],
    [
      {
        img: 'assets/images/client/4.jpeg',
        title: 'Sachin Hooda',
        description: 'I am thrilled to share my fantastic experience with Visa Guru Immigration. Thanks to Sahil and the team, I achieved a 7 band score in my IELTS exam. They also handled my UK visa application flawlessly, and I am delighted to announce that I received my UK visa successfully!The professionalism, dedication, and personalized service provru Immigration were outstanding. They made the entire process smooth and stress-free. I highly recoided by Visa Gummend their services to anyone seeking immigration and visa assistance.Thank you, Visa Guru Immigration, for your incredible support and making my dreams come true!',
      },
      {
        img: 'assets/images/client/5.jpeg',
        title: 'Lovepreet Kaur',
        description: 'I am incredibly grateful for the exceptional service provided by Visa Guru Immigration. My experience with Sahil sharma and the team was outstanding from start to finish. I received top-notch IELTS coaching, which greatly contributed to my success. Thanks to their expert guidance and support, I secured my UK student visa without any hassle. Their professionalism, dedication, and personalized approach made all the difference. I highly recommend Visa Guru Immigration for anyone seeking reliable and effective immigration and coaching services. Thank you for making my dreams a reality!"',
      },
      {
        img: 'assets/images/client/6.jpeg',
        title: 'Aryan mor',
        description: "My experience with Visa Guru Immigration has been remarkable. Sahil sharma  and his team provided outstanding PTE coaching that played a crucial role in my success. Their detailed and supportive approach made the preparation process smooth and effective. Thanks to their guidance, I received my Germany visa without any issues. The team’s professionalism and dedication are truly commendable. If you're looking for top-quality coaching and reliable visa services, Visa Guru Immigration is the place to go. Highly recommended!",
      },
    ],

    [
      {
        img: 'assets/images/client/7.jpeg',
        title: 'Rahul hooda',
        description: "My experience with Visa Guru Immigration was exceptional. The team's expertise in handling my Australia tourist visa application was evident from start to finish. Their meticulous approach and in-depth knowledge ensured a seamless and efficient process. The professionalism and dedication displayed were remarkable, making what could have been a complex procedure straightforward and stress-free. I highly endorse Visa Guru Immigration for anyone seeking premier visa services and unparalleled support. Thank you for delivering such exemplary service!",
      },
      {
        img: 'assets/images/client/8.jpeg',
        title: 'Yashika',
        description: "I recently completed my IELTS and speaking classes with Visa Guru Immigration, and I couldn't be happier with the results. Thanks to their expert guidance, I achieved an overall band score of 8! The trainers are highly knowledgeable and provided personalized feedback, which was crucial in improving my skills. The online classes were flexible and engaging, making the learning experience both effective and enjoyable. I highly recommend Visa Guru Immigration to anyone looking to excel in their IELTS exam!",
      },
      {
        img: 'assets/images/client/9.jpeg',
        title: 'Kiran jakhu',
        description: "I had a fantastic experience with Visa Guru Immigration for my PTE training. Their comprehensive online classes and personalized coaching were instrumental in helping me achieve an overall score of 83 in the PTE exam on my first attempt. Special thanks to Sahil Sharma and the entire team, who provided exceptional support, insightful tips, and targeted feedback that greatly enhanced my performance. The study materials were spot on, mirroring the actual exam closely, which built my confidence and ensured I was thoroughly prepared. I highly recommend Visa Guru Immigration to anyone aiming for success in their PTE or other visa-related exams.",
      },

    ],
    [
      {
        img: 'assets/images/client/10.jpeg',
        title: 'Gourav Hooda',
        description: "I had an outstanding experience with Visa Guru Immigration while preparing for my PTE exam. The professionalism and depth of knowledge exhibited by Sahil Sharma and his team were remarkable. Their tailored approach ensured that I met the PTE score requirements for my visa application. The training sessions were well-structured, and the materials provided were directly aligned with the exam content, allowing me to approach the test with confidence. I particularly appreciated the personalized feedback and continuous support throughout the process, which played a crucial role in my success. I highly recommend Visa Guru Immigration to anyone looking for reliable and expert assistance in their visa journey.",
      },
      {
        img: 'assets/images/client/11.jpeg',
        title: 'Anchal sharma',
        description: "I had an excellent experience with the online English-speaking course at Visa Guru Immigration. The lessons were well-structured and tailored to my level, making it easier to grasp complex concepts. Despite being online, the instructor was highly engaging and provided valuable feedback that helped me improve my speaking skills significantly. The interactive sessions and practical exercises boosted my confidence, and I noticed a remarkable improvement in my fluency. Highly recommended for anyone looking to enhance their English-speaking abilities!",
      },

    ],
  ]

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCardHeader} from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BbProj3';
  profiles: any[] = [
    {
      name: 'Rahul Roy',
      photo: '/assets/s1Winner.webp',
      InstagramProfileLink: 'https://www.instagram.com/officialrahulroy/?hl=en',
      FacebookProfileLink: 'https://www.facebook.com/rahulroy.official',
      season: 1,
      year: 2007,
      about: 'Model and actor, famous for 90s films like Aashiqui, Junoon and Gumrah.',
      prize: '₹1 crore',
      host: 'Arshad Warsi',
      runnerUp: 'Carol Gracias',
      showType: 'TV Show',
      hostedBySalman: false,
      instagramId: '@rahulroy.official',
      facebookId: 'RahulRoyOfficial',
      controversy: 'No major controversies during his season.',
      details: 'Rahul Roy won the first season of Bigg Boss in 2007. He was famous in the 90s for his roles in films like Aashiqui, Junoon and Gumrah. With Carol Gracias becoming the runner-up, Rahul won a cash prize of ₹1 crore. This season was hosted by Arshad Warsi.'
    },
    {
      name: 'Ashutosh Kaushik',
      photo: '/assets/s2winner.webp',
      InstagramProfileLink: 'https://www.instagram.com/iamashutoshkaushik/?hl=en',
      facebookProfileLink: 'https://www.facebook.com/iamashutoshkaushik',
      season: 2,
      year: 2008,
      about: 'Won MTV Hero Honda Roadies 5.0 in 2007 before winning Bigg Boss.',
      prize: '₹1 crore',
      host: 'Shilpa Shetty',
      runnerUp: 'Raja Chaudhary',
      showType: 'TV Show',
      hostedBySalman: false,
      instagramId: '@ashutosh_kaushik82',
      facebookId: 'AshutoshKaushikOfficial',
      controversy: 'Involved in a drunk driving case in 2009.',
      details: 'Ashutosh won MTV Hero Honda Roadies 5.0 in 2007 and the second season of Bigg Boss in 2008. Raja Chaudhary was this season\'s runner-up hosted by Shilpa Shetty, with Ashutosh winning ₹1 crore. He went on to act in a few films post winning.'
    },
    {
      name: 'Vindu Dara Singh',
       photo: '/assets/s3Winner.webp',
      InstagramProfileLink: 'https://www.instagram.com/vindusingh/?hl=en',
      facebookProfileLink: 'https://www.facebook.com/vindusingh.official',
      season: 3,
      year: 2009,
      about: 'Famous for playing Hanuman in Jai Veer Hanuman.',
      prize: '₹1 crore',
      host: 'Amitabh Bachchan',
      runnerUp: 'Pravesh Rana',
      showType: 'TV Show',
      hostedBySalman: false,
      instagramId: '@vindusingh',
      facebookId: 'VinduDaraSinghOfficial',
      controversy: 'Arrested in 2013 in connection with the IPL spot-fixing case, later acquitted.',
      details: 'Vindu was famous for playing Hanuman in Jai Veer Hanuman, much like his father, wrestler-actor Dara Singh played in Ramayan. He won the show\'s third season in 2009, with Amitabh Bachchan playing the host and Pravesh Rana as the runner-up. Vindu also took home ₹1 crore.'
    },
    {
      name: 'Shweta Tiwari',
      photo: '/assets/s4winner.webp',
      InstagramProfileLink: 'https://www.instagram.com/shweta.tiwari/?hl=en',
      facebookProfileLink: 'https://www.facebook.com/shweta.tiwari.official',
      season: 4,
      year: 2011,
      about: 'Well known for playing Prerna in Kasautii Zindagii Kay.',
      prize: '₹1 crore',
      host: 'Salman Khan',
      runnerUp: 'The Great Khali',
      showType: 'TV Show',
      hostedBySalman: true,
      instagramId: '@shweta.tiwari',
      facebookId: 'ShwetaTiwariOfficial',
      controversy: 'Domestic violence allegations against ex-husband Raja Chaudhary.',
      details: 'Shweta was well known for playing the famous role of Prerna in Kasautii Zindagii Kay. This is the first year Salman Khan played the host, in 2011. Shweta garnered more votes than The Great Khali and took home ₹1 crore.'
    },
    {
      name: 'Juhi Parmar',
       photo: '/assets/s5.jpg',
      InstagramProfileLink: 'https://www.instagram.com/juhiparmar/?hl=en',
      facebookProfileLink: 'https://www.facebook.com/juhiparmar.official',
      season: 5,
      year: 2012,
      about: 'Known for Kumkum – Ek Pyara Sa Bandhan fame.',
      prize: '₹1 crore',
      host: 'Salman Khan and Sanjay Dutt',
      runnerUp: 'Mahek Chahal',
      showType: 'TV Show',
      hostedBySalman: true,
      instagramId: '@juhiparmar',
      facebookId: 'JuhiParmarOfficial',
      controversy: 'Divorce from Sachin Shroff in 2018.',
      details: 'The location for this season shifted from Lonavala to Kajrat, with Salman Khan bringing on Sanjay Dutt also to host the show in 2012. Juhi of Kumkum – Ek Pyara Sa Bandhan fame took home ₹1 crore after beating Mahek Chahal.'
    },
    {
      name: 'Urvashi Dholakia',
       photo: '/assets/s6.jpg',
      InstagramProfileLink: 'https://www.instagram.com/urvashidholakia/',
      facebookProfileLink: 'https://www.facebook.com/urvashidholakiaofficial',
      season: 6,
      year: 2013,
      about: 'The iconic Komolika from television.',
      prize: '₹50 lakh',
      host: 'Salman Khan',
      runnerUp: 'Imam Siddiqui',
      showType: 'TV Show',
      hostedBySalman: true,
      instagramId: '@urvashidholakia',
      facebookId: 'UrvashiDholakiaOfficial',
      controversy: 'Feud with co-contestant Imam Siddiqui during the show.',
      details: 'The venue shifted back to Lonavala in 2013 and the iconic Komolika aka Urvashi beat Imam Siddiqui to take home ₹50 lakh as the winner. Urvashi continues to act in television, apart from acting in a few films.'
    },
    {
      name: 'Gauahar Khan',
       photo: '/assets/s7.jpg',
      InstagramProfileLink: 'https://www.instagram.com/gauaharkhan/?hl=en',
      facebookProfileLink: 'https://www.facebook.com/gauaharkhanofficial',
      season: 7,
      year: 2013,
      about: 'Started career as a model, participated in Femina Miss India 2002.',
      prize: '₹50 lakh',
      host: 'Salman Khan',
      runnerUp: 'Tanishaa Mukherji',
      showType: 'TV Show',
      hostedBySalman: true,
      instagramId: '@gauaharkhan',
      facebookId: 'GauaharKhanOfficial',
      controversy: 'Slapped by an audience member during a reality show in 2014.',
      details: 'In 2013, Gauahar took home ₹50 lakh, garnering more votes than Tanishaa Mukherji. Gauahar started her career as a model and participated in the Femina Miss India contest in 2002. She went on to act in films and television shows before and post Bigg Boss.'
    },
    {
      name: 'Gautam Gulati',
      photo: '/assets/s8.jpg', 
      InstagramProfileLink: 'https://www.instagram.com/welcometogauthamcity/',
      facebookProfileLink: 'https://www.facebook.com/gautamgulati.official',
      season: 8,
      year: 2015,
      about: 'TV actor, rejected on MTV Roadies 5.',
      prize: '₹50 lakh',
      host: 'Salman Khan and Farah Khan',
      runnerUp: 'Not specified',
      showType: 'TV Show',
      hostedBySalman: true,
      instagramId: '@thegautamgulati',
      facebookId: 'GautamGulatiOfficial',
      controversy: 'Conflict with co-contestant Karishma Tanna during the show.',
      details: 'The makers tried something new in 2015 with Bigg Boss Halla Bol, similar to Ultimate Big Brother, where five contestants from previous seasons compete. The regular show was merged with this and Farah Khan took over the hosting duties. TV actor Gautam, who was rejected on MTV Roadies 5 won the show. He won ₹50 lakh.'
    },
    {
      name: 'Prince Narula',
      season: 9,
      year: 2016,
      about: 'Model, actor, and singer. Won MTV Roadies 12 and MTV Splitsvilla 8 in 2015.',
      prize: '₹50 lakh',
      host: 'Salman Khan',
      runnerUp: 'Rishab Sinha',
      showType: 'TV Show',
      hostedBySalman: true,
      instagramId: '@princenarula',
      facebookId: 'PrinceNarulaOfficial',
      controversy: 'Accused of being aggressive during tasks in the show.',
      details: 'Model, actor, and singer Prince Narula won the show\'s ninth season in 2016 after winning MTV Roadies 12 and MTV Splitsvilla 8 in 2015. He met his wife Yuvika Chaudhary in the Bigg Boss house and married her in 2018. Later, he won Nach Baliye 9 in 2019. He won ₹50 lakh, beating Rishab Sinha.'
    },
    {
      name: 'Manveer Gurjar',
      season: 10,
      year: 2017,
      about: 'Took over family farming business, joined a political party.',
      prize: '₹50 lakh',
      host: 'Salman Khan',
      runnerUp: 'Bani J',
      showType: 'TV Show',
      hostedBySalman: true,
      instagramId: '@imanveergurjar',
      facebookId: 'ManveerGurjarOfficial',
      controversy: 'Rumors about his marital status post-show.',
      details: 'Manveer Gurjar beat Bani J and took home ₹50 lakh in 2017. He took over his family\'s farming business and joined a political party. He stayed away from the limelight but acted in Radhe and The Bridge.'
    },
    {
      name: 'Shilpa Shinde',
      season: 11,
      year: 2018,
      about: 'Known for playing Angoori Manmohan Tiwari in Bhabhi Ji Ghar Par Hai!',
      prize: '₹44 lakh',
      host: 'Salman Khan',
      runnerUp: 'Hina Khan',
      showType: 'TV Show',
      hostedBySalman: true,
      instagramId: '@shilpa_shinde_official',
      facebookId: 'ShilpaShindeFanPage',
      controversy: 'Legal dispute with the producers of Bhabhi Ji Ghar Par Hai!',
      details: 'Shilpa Shinde won more votes than Hina Khan in 2018, winning ₹44 lakh. She is known for playing Angoori Manmohan Tiwari in Bhabhi Ji Ghar Par Hai! She went on to act on TV, apart from a web series, Paurashpur.'
    },
    {
      name: 'Dipika Kakar',
      season: 12,
      year: 2018,
      about: 'Known for roles in Sasural Simar Ka and Kahaan Hum Kahaan Tum.',
      prize: '₹30 lakh',
      host: 'Salman Khan',
      runnerUp: 'S Sreesanth',
      showType: 'TV Show',
      hostedBySalman: true,
      instagramId: '@ms.dipika',
      facebookId: 'DipikaKakarIbrahim',
      controversy: 'Accused of playing a safe game and being boring by co-contestants.',
      details: 'Dipika Kakar aka Faiza Ibrahim is well-known for her roles in Sasural Simar Ka and Kahaan Hum Kahaan Tum. She won ₹30 lakh in 2018 by beating cricketer S Sreesanth. She also took part in Nach Baliye 8 in 2017.'
    },
    {
      name: 'Sidharth Shukla',
      season: 13,
      year: 2020,
      about: 'Best known for his role in Balika Vadhu.',
      prize: '₹50 lakh',
      host: 'Salman Khan',
      runnerUp: 'Asim Riaz',
      showType: 'TV Show',
      hostedBySalman: true,
      instagramId: '@realsidharthshukla',
      facebookId: 'SidharthShuklaOfficial',
      controversy: 'Multiple heated arguments and physical altercations with co-contestants.',
      details: 'Best known for his role in Balika Vadhu, Sidharth Shukla won Bigg Boss right before the pandemic broke in 2020. He beat Asim Riaz and took home ₹50 lakh. Fans were shocked when he passed away on September 2, 2021, after suffering a heart attack at the age of 40.'
    },
    {
      name: 'Rubina Dilaik',
      season: 14,
      year: 2021,
      about: 'Known for roles in Chotti Bahu and Shakti - Astitva Ke Ehsaas Ki.',
      prize: '₹36 lakh',
      host: 'Salman Khan',
      runnerUp: 'Rahul Vaidya',
      showType: 'TV Show',
      hostedBySalman: true,
      instagramId: '@rubinadilaik',
      facebookId: 'RubinaDilaikOfficial',
      controversy: 'Revealed marital issues with husband Abhinav Shukla on the show.',
      details: 'In 2021, Rubina Dilaik, best known for her roles in Chotti Bahu and Shakti - Astitva Ke Ehsaas Ki, won the show and took home ₹36 lakh. She won more votes than composer Rahul Vaidya and debuted on the silver screen with the 2022 film Ardh.'
    },
    {
      name: 'Tejasswi Prakash',
      season: 15,
      year: 2022,
      about: 'Hindi television and Marathi films actor, known for her role in Naagin 6.',
      prize: '₹40 lakh',
      host: 'Salman Khan',
      runnerUp: 'Pratik Sehajpal',
      showType: 'TV Show',
      hostedBySalman: true,
      instagramId: '@tejasswiprakash',
      facebookId: 'TejasswiPrakashOfficial',
      controversy: 'Relationship with co-contestant Karan Kundrra sparked debates.',
      details: 'Hindi television and Marathi films actor Tejasswi, known for her role in Naagin 6, won the 15th season of the show. Pratik Sehajpal was the runner-up in the season that saw Tejasswi take home ₹40 lakh.'
    },
    {
      name: 'MC Stan',
      season: 16,
      year: 2023,
      about: 'Indian rapper and music producer.',
      prize: 'Not specified',
      host: 'Salman Khan',
      runnerUp: 'Not specified',
      showType: 'TV Show',
      hostedBySalman: true,
      instagramId: '@m___c___stan',
      facebookId: 'MCStanOfficial',
      controversy: 'Involved in verbal spats with co-contestants, particularly Archana Gautam.',
      details: 'MC Stan, an Indian rapper and music producer, won the 16th season of Bigg Boss. The prize money and runner-up details for this season were not specified in the provided information.'
    }
  ];


  

  controversyDetails: { [key: string]: string[] } = {
    'Rahul Roy': [
      'No major controversies during his season.',
      'Kept a low profile throughout the show.',
      'Post-show, faced criticism for his views on nepotism in Bollywood.',
      'In 2021, suffered a brain stroke, leading to speculation about his health and career.',
      'His quiet demeanor in the house was both praised and criticized by viewers.'
    ],
    'Ashutosh Kaushik': [
      'Involved in a drunk driving case in 2009, after winning Bigg Boss.',
      'Had several heated arguments with co-contestants during his season.',
      'In 2021, filed a petition for his right to be forgotten, requesting removal of videos, photos and articles from the internet.',
      'Faced backlash for his aggressive behavior towards female contestants.',
      'His win was questioned by some who felt other contestants were more deserving.'
    ],
    'Vindu Dara Singh': [
      'Arrested in 2013 in connection with the IPL spot-fixing case, later acquitted.',
      'Accused of helping bookies get in touch with cricketers.',
      'His friendship with Sreesanth in the house was questioned by other contestants.',
      'Faced criticism for his strategy of playing a diplomatic game.',
      'Post-show, his comments on other celebrities often stirred controversies.'
    ],
    'Shweta Tiwari': [
      'Domestic violence allegations against ex-husband Raja Chaudhary.',
      'Had a major fallout with co-contestant Dolly Bindra during the show.',
      'Post-show, her personal life, including her second marriage and its issues, became tabloid fodder.',
      'Faced criticism for bringing up her daughter in conversations for sympathy.',
      'Her win was debated as some felt she played a safe game.'
    ],
    'Juhi Parmar': [
      'Divorce from Sachin Shroff in 2018, which became a public affair.',
      'Accused of being dominating and bossy by co-contestants during her season.',
      'Her friendship with Amar Upadhyay in the house raised eyebrows.',
      'Post-show, faced backlash for her comments on co-contestant Amar Upadhyay.',
      'Her parenting style became a topic of discussion in media.'
    ],
    'Urvashi Dholakia': [
      'Faced criticism for her aggressive behavior in the house.',
      'Had multiple conflicts with Imam Siddiqui during the season.',
      'Her past relationship with Anuj Sachdeva became a topic of discussion.',
      'Post-show, her participation in Nach Baliye with ex-boyfriend Anuj sparked controversies.',
      'Her strong personality was both admired and criticized by viewers.'
    ],
    'Gauahar Khan': [
      'Her relationship with co-contestant Kushal Tandon was heavily scrutinized.',
      'Faced backlash for allegedly breaking house rules multiple times.',
      'Was slapped by an audience member during the finale for wearing short dresses.',
      'Her comments on religious and political issues often stirred controversies on social media.',
      'Post-show, her break-up with Kushal Tandon became a media spectacle.'
    ],
    'Gautam Gulati': [
      'His aggressive behavior towards Karishma Tanna sparked debates.',
      'Accused of using abusive language during fights in the house.',
      'His friendship with Diandra Soares led to speculation about their relationship.',
      'Faced criticism for his lone wolf strategy in the initial weeks.',
      'Post-show, his Bollywood career didnt take off as expected, leading to discussions about the Bigg Boss curse.'
    ],
    'Prince Narula': [
      'His relationships in the house, especially with Nora Fatehi, were controversial.',
      'Accused of being overly competitive and manipulative by some co-contestants.',
      'His strategy of forming alliances was criticized as unfair by some viewers.',
      'Faced backlash for his aggressive behavior during tasks.',
      'Post-show, his quick engagement and marriage to Yuvika Chaudhary raised eyebrows.'
    ],
    'Manveer Gurjar': [
      'His marital status became a topic of controversy after the show.',
      'Faced criticism for hiding his marriage from the public and co-contestants.',
      'His friendship with Nitibha Kaul was questioned by many.',
      'Post-show, his sudden fame led to family disputes that became public.',
      'Faced backlash for allegedly going back on his common man image after winning.'
    ],
    'Shilpa Shinde': [
      'Her ongoing feud with producer Vikas Gupta was a major talking point.',
      'Accused of unprofessional behavior in her previous TV shows.',
      'Her closeness with co-contestant Vikas Gupta towards the end of the show surprised many.',
      'Post-show, her political career move was met with mixed reactions.',
      'Faced criticism for her comments on the #MeToo movement.'
    ],
    'Dipika Kakar': [
      'Accused of playing a safe game and not taking strong stands.',
      'Her relationship with Sreesanth was questioned by many co-contestants.',
      'Faced criticism for allegedly copying Shilpa Shinde\'s game plan.',
      'Her emotional breakdowns were seen as a strategy by some viewers.',
      'Post-show, her decision to wear a hijab stirred debates on social media.'
    ],
    'Sidharth Shukla': [
      'His aggressive behavior towards Asim Riaz and other contestants was heavily criticized.',
      'Accused of being favored by the makers of the show.',
      'His closeness with Shehnaaz Gill became a major talking point both during and after the show.',
      'Faced backlash for his temper issues and physical aggression during tasks.',
      'His untimely death in 2021 led to discussions about the pressure of fame from reality shows.'
    ],
    'Rubina Dilaik': [
      'Revealed marital issues with husband Abhinav Shukla on the show.',
      'Had major conflicts with Rahul Vaidya and Jasmin Bhasin.',
      'Accused of being arrogant and having a superiority complex by co-contestants.',
      'Her strong opinions often led to heated arguments in the house.',
      'Post-show, faced criticism for her comments on mental health issues.'
    ],
    'Tejasswi Prakash': [
      'Relationship with co-contestant Karan Kundrra sparked debates.',
      'Accused of playing victim card and being overly dramatic by some co-contestants.',
      'Her win was questioned by many, with allegations of the show being biased towards her.',
      'Faced backlash for her comments on other contestants, especially Shamita Shetty.',
      'Post-show, her immediate signing of Naagin 6 led to speculation about pre-planned deals.'
    ],
    'MC Stan': [
      'Involved in verbal spats with co-contestants, particularly Archana Gautam.',
      'His use of explicit language on the show was criticized by some viewers.',
      'Faced backlash for his initial reluctance to participate in tasks and house activities.',
      'His win was debated as many felt he wasnt as involved in the show as other contestants.',
      'Post-show, his comments about the show being scripted stirred controversies.'
    ]
  };


}
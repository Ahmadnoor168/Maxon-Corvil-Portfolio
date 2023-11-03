import Mock from "../mock";
import resumePDF from "./Assets/files/Maxon_Corvil_Resume_2023.pdf"
import profileImage from "./Assets/images/profile.jpg"
const database = {
  information: {
    name: 'Maxon Corvil',
    aboutContent: "I am an Experienced software engineer devoted to improving my skills through hands-on learning and development work. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Adept at using JavaScript, Python, and other programming languages to produce clean, well-documented code. Often described as a well-organized and collaborative team player with strong communication and analytical abilities. Strategic thinker and innovative creator with the ability to morph to meet any company’s software engineering needs and further its success.",
    age: 23,
    phone: '',
    language: 'English, Haitian Kreyòl ',
    email: '',
    location: 'Miami Metropolitan Area, USA',
    socialLinks: {
      facebook: '',
      portfolio: '/resume#/portfolio',
      linkedin: 'https://www.linkedin.com/in/maxon-corvil/',
      github: 'https://github.com/Maxon-stack'
    },
    brandImage: profileImage,
    aboutImage: profileImage,
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: resumePDF
  },  
  softSkills: [
    {
      title: "Communication",
      icon: 'wechat',
      details: "The ability to convey or share ideas and feelings effectively.",
      usedAt: ["American Express", "Johns Hopkins University" ,"Florida Atlantic University"]
    },
    {
      title: "Leadership",
      icon: 'grow',
      details: "the ability to mentor, train, or guide.",
      usedAt: ["American Express", "Johns Hopkins University" ,"Florida Atlantic University"]
    },
    {
      title: "Problem-solving",
      icon: 'code',
      details: "The ablity to analytically and creatively solve problems.",
      usedAt: ["American Express", "Johns Hopkins University" ,"Florida Atlantic University"]
    },
    {
      title: "Time management",
      icon: 'alarm-clock',
      details: " The ability to use your time wisely to work as efficiently as possible.",
      usedAt: ["American Express", "Johns Hopkins University" ,"Florida Atlantic University"]
    },
    {
      title: "Critical thinking",
      icon: 'thought',
      details: "The ability to explore a problem from every possible angle to devise the right solution.",
      usedAt: ["American Express", "Johns Hopkins University" ,"Florida Atlantic University"]
    }
  ],
  awards: [
    {
      title: "Presidents List",
      icon: 'graduation',
      details: "The President's List includes the names of all undergraduate students who have completed 12 or more credits and who have attained a grade point average of 4.0.",
      usedAt: ["Florida Atlantic University"]
    },
    {
      title: "Deans List",
      icon: 'graduation',
      details: "To be included in the Dean's List, an undergraduate student must complete a full-time load with a grade point average of 3.5 or greater",
      usedAt: ["Florida Atlantic University"]
    },
  ],
  groups: [
    {
      title: "IEEE Computer Society",
      icon: 'code-alt',
      details: "The ability to convey or share ideas and feelings effectively.",
      usedAt: ["Florida Atlantic University"]
    },
  ],
  mySkills: [
    {
      title:'React',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      years: 2,
      placesUsed: ['Amex', 'SAFCO', 'FAU','JHU','Personal'],
    },
    {
      title:'JavaScript',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
      years: 2,
      placesUsed: ['Amex', 'SAFCO', 'FAU','JHU','Personal'],
    },
    {
      title:'Python',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
      years: 2,
      placesUsed: ['Amex', 'SAFCO', 'FAU','JHU','Personal'],
    },    
    {
      title:'HTML',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
      years: 2,
      placesUsed: ['Amex', 'SAFCO', 'FAU','JHU','Personal'],
    },
    {
      title:'CSS',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
      years: 2,
      placesUsed: ['Amex', 'SAFCO', 'FAU','JHU','Personal'],
    },    
    {
      title:'C#',
      icon: '/resume/skillicons/C.png',
      years: 2,
      placesUsed: ['Amex', 'SAFCO', 'FAU','JHU','Personal'],
    },
    {
      title:'Node',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
      years: 2,
      placesUsed: ['Amex', 'SAFCO', 'FAU','JHU','Personal'],
    },
    {
      title:'Jest',
      icon: 'https://iconape.com/wp-content/files/dx/352988/svg/jest-seeklogo.com.svg',
      years: 2,
      placesUsed: ['Amex', 'SAFCO', 'FAU','JHU','Personal'],
    },    
    {
      title:'Docker',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
      years: 2,
      placesUsed: ['Amex', 'SAFCO', 'FAU','JHU','Personal'],
    },
    {
      title:'Git',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
      years: 2,
      placesUsed: ['Amex', 'SAFCO', 'FAU','JHU','Personal'],
    },
    {
      title:'MongoDB',
      icon: '/resume/skillicons/mongodb.png',
      years: 2,
      placesUsed: ['Amex', 'SAFCO', 'FAU','JHU','Personal'],
    },
    {
      title:'REACT.NET',
      icon: '/resume/skillicons/reactnet.png',
      years: 2,
      placesUsed: ['Amex', 'SAFCO', 'FAU','JHU','Personal'],
    },    
    {
      title:'Frontend',
      icon: '/resume/skillicons/react.png',
      years: 2,
      placesUsed: ['Amex', 'SAFCO', 'FAU','JHU','Personal'],
    },    
    {
      title:'CI/CD',
      icon: '/resume/skillicons/cicg.png',
      years: 2,
      placesUsed: ['Amex', 'SAFCO', 'FAU','JHU','Personal'],
    },
  ],


  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Javascript",
      value: 70
    },
    {
      title: "jQuery",
      value: 85
    },
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "Photoshop",
      value: 65
    }
  ],
  portfolio: [
    {
      id: 1,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/resume/images/portfolio-image-1.jpg",
      largeImageUrl: ["/resume/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 2,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/resume/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/resume/images/portfolio-image-4-lg.jpg",
        "/resume/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 3,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/resume/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 4,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/resume/images/portfolio-image-3.jpg",
      largeImageUrl: ["/resume/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 5,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/resume/images/portfolio-image-5.jpg",
      largeImageUrl: ["/resume/images/portfolio-image-5-lg.jpg"]
    },
    {
      id: 6,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/resume/images/portfolio-image-6.jpg",
      largeImageUrl: ["/resume/images/portfolio-image-6-lg.jpg"]
    },
    {
      id: 7,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/resume/images/portfolio-image-7.jpg",
      largeImageUrl: ["/resume/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 8,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/resume/images/portfolio-image-8.jpg",
      largeImageUrl: ["/resume/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 9,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/resume/images/portfolio-image-9.jpg",
      largeImageUrl: ["/resume/images/portfolio-image-9-lg.jpg"]
    },
    {
      id: 10,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/resume/images/portfolio-image-3.jpg",
      largeImageUrl: ["/resume/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 11,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/resume/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/resume/images/portfolio-image-4-lg.jpg",
        "/resume/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 12,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/resume/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 13,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/resume/images/portfolio-image-1.jpg",
      largeImageUrl: ["/resume/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 14,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/resume/images/portfolio-image-5.jpg",
      largeImageUrl: ["/resume/images/portfolio-image-5-lg.jpg"]
    },
    {
      id: 15,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/resume/images/portfolio-image-6.jpg",
      largeImageUrl: ["/resume/images/portfolio-image-6-lg.jpg"]
    },
    {
      id: 16,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/resume/images/portfolio-image-7.jpg",
      largeImageUrl: ["/resume/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 17,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/resume/images/portfolio-image-8.jpg",
      largeImageUrl: ["/resume/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 18,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/resume/images/portfolio-image-9.jpg",
      largeImageUrl: ["/resume/images/portfolio-image-9-lg.jpg"]
    },
    {
      id: 19,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/resume/images/portfolio-image-1.jpg",
      largeImageUrl: ["/resume/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 20,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/resume/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/resume/images/portfolio-image-4-lg.jpg",
        "/resume/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 21,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/resume/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 22,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/resume/images/portfolio-image-3.jpg",
      largeImageUrl: ["/resume/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 23,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/resume/images/portfolio-image-5.jpg",
      largeImageUrl: ["/resume/images/portfolio-image-5-lg.jpg"]
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2018 - Present",
        position: "Frontend Web Developer",
        company: "Abc Company",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 2,
        year: "2016 - 2018",
        position: "Frontend Web Developer",
        company: "CBA Company",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 3,
        year: "2014 - 1016",
        position: "UI/UX Designer",
        company: "Example Company",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2018 - 2019",
        graduation: "Master of Science",
        university: "Abc University",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 2,
        year: "2016 - 2018",
        graduation: "Bachelor of Science",
        university: "Abc University",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 3,
        year: "2015 - 2016",
        graduation: "Higher Schoold Graduation",
        university: "Abc College",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/resume/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/resume/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/resume/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/resume/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/resume/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/resume/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/resume/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/resume/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/resume/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/resume/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/resume/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/resume/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/resume/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/resume/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/resume/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+012-3456-7891', '+012-3456-7892'],
    emailAddress: ['admin.sitename@example.com', 'info.sitename@example.com'],
    address: "121 King Street, Melbourne, Victoria 3000, Australia"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/softskills").reply(config => {
  const response = database.softSkills;
  return [200, response];
});
Mock.onGet("/api/awards").reply(config => {
  const response = database.awards;
  return [200, response];
});
Mock.onGet("/api/groups").reply(config => {
  const response = database.groups;
  return [200, response];
});
Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/myskills").reply(config => {
  const response = database.mySkills;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolio").reply(config => {
  const response = database.portfolio;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});
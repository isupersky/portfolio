/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aakash's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Aakash Sinha Portfolio",
    type: "website",
    // TODO: update this
    url: "http://aakashsinha.com/",
  },
};

//Home Page
const greeting = {
  title: "Aakash Sinha",
  logo_name: "AakashSinha",
  nickname: "@isupersky",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1FL_wydnPF2SWCdw2goYAgZ1KKBx8TpcD/view?usp=sharing",
  portfolio_repository: "https://github.com/isupersky?tab=repositories",
  githubProfile: "https://github.com/isupersky",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/isupersky",
  // linkedin: "https://www.linkedin.com/in/aakash9868sinha/",
  // gmail: "mailtomeaakash@gmail.com",
  // medium: "https://isupersky.medium.com/",
  // instagram: "https://www.instagram.com/i_aakashsinha/"

  {
    name: "Github",
    link: "https://github.com/isupersky",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aakash9868sinha/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/isupersky",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:mailtomeaakash@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/isupersky",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/aakash9868sinha/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/i_aakashsinha/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating mobile/backend applications in Java & Spring Boot",
        "⚡ Building responsive website front end using React-Redux",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "sql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#DC382D",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "gradle",
          fontAwesomeClassname: "simple-icons:gradle",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying services on cloud to use on devices",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Guru Gobind Singh Indraprastha University",
      subtitle: "Bachelors in Computer Application",
      logo_path: "GGSIU_logo.png",
      alt_name: "Guru Gobind Singh Indraprastha University",
      duration: "2014 - 2017",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://www.ipu.ac.in/",
    },
    {
      title: "Guru Gobind Singh Indraprastha University",
      subtitle: "Masters in Computer Application",
      logo_path: "GGSIU_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2017 - 2020",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "http://www.ipu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Developer, Designer and Software Architect. I have also worked with some well established companies mostly as backend Developer. I love organising/participating in events and that is why I am also involved in many hackathons, companies and communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Software Engineer",
          company: "Freecharge Payment Technologies Pvt. Ltd",
          company_url: "https://freecharge.com/",
          logo_path: "Freecharge_logo.png",
          duration: "April 2022 - Present",
          location: "gurgaon, Haryana",
          description:
            "FreeCharge is a wholly-owned subsidiary of Axis Bank Limited, is India's No.1 payments app. Working on lending products. The projects involve automating the process of lending for the customer. I am currently scaling the core loan Management service, which is responsible for all the accounting/calculations at different life stages of a loan. Along side it i have worked on integrating muliple payment gateways and payment mode such as NACH, Standing Instructions and Manual payments for smooth collection of funds(RePayments) from the users",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "Freecharge Payment Technologies Pvt. Ltd",
          company_url: "https://freecharge.com/",
          logo_path: "Freecharge_logo.png",
          duration: "July 2021 - Mar 2022",
          location: "gurgaon, Haryana",
          description:
            "FreeCharge is a wholly-owned subsidiary of Axis Bank Limited, is India's No.1 payments app. I was Involved in development of the loan Management service, which is responsible for all the accounting/calculations at different life stages of a loan.",
          color: "#9b1578",
        },
        {
          title: "Software Developer",
          company: "To The New Pvt. Ltd.",
          company_url: "https://www.tothenew.com/",
          logo_path: "TTN_logo.jpg",
          duration: "Dec 2020 - Jul 2020",
          location: "Noida, UP",
          description:
            "TO THE NEW is a digital technology firm providing digital transformation and product engineering services. I worked on Two products here. First one was a Self drive car hailing service for Saudi region and Second was taxation product for large corporations such as Microsoft and PWC",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "JVM Intern",
          company: "To The New Pvt. Ltd.",
          company_url: "https://www.tothenew.com/",
          logo_path: "TTN_logo.jpg",
          duration: "Feb 2020 - Nov 2020",
          location: "Noida, UP",
          description:
            "Worked of Software Development fundamentals and got to explore and have hands on experience on Sping, Git, Cloud and reactjs. Developed a fully functional eCommerce WebApp, complete with seller dashboard and inventory management.",
          color: "#000000",
        },
        {
          title: "Data Science Intern",
          company: "Ministry of MSME",
          company_url:
            "https://msme.gov.in/",
          logo_path: "GOV_logo.png",
          duration: "Mar 2014 - May 2014",
          location: "Management Development Institute, Gurgaon",
          description:
            "PMEGP or Prime Minister’s Employment Generation Programme is Government subsidy linked Entrepreneurship Program. My Job here was to Collect, Clean and Analyse the data points to evaluate the success rate of this programme by geoghaphical locations and industry sectors",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "BAT Ambassador",
          company: "brave Software",
          company_url: "https://brave.com/",
          logo_path: "Brave-logo-color-RGB.png",
          duration: "April 2021 - Sep 2022",
          location: "Remote",
          description:
            "Brave is a privacy-focused browser, which automatically blocks some advertisements and website trackers in its default settings. Users can turn on optional ads that reward them for their attention in the form of Basic Attention Tokens (BAT), which can be used as a cryptocurrency or to make payments to registered websites and content creators. I managed to get involved in the inner community concerned with development and progress of open and safe web browser. Also managed to score some cool NFTs and goodies for my contributions",
          color: "#4285F4",
        },
        {
          title: "Hike Messenger Beta Tester Group",
          company: "Hike Messenger",
          company_url: "https://get.hike.in/",
          logo_path: "hike-messenger-logo.png",
          duration: "Jan 2015 - Dec 2017",
          location: "Gurgaon, haryana",
          description:
            "Hike Messenger Beta Tester was a Beta testing program ran by Hike QA team to test a new feature among a small group before releasing it to general public. Managed to learn few thing and collect some awesome goodies.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create MicroServicea using java and Spring and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
   data: [],
   //[
  //   {
  //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
  //     name: "Artificial Intelligence Paper",
  //     createdAt: "2020-03-06T16:26:54Z",
  //     description: "Paper Written on Artificial Intelligence published in xyz ",
  //     url:
  //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
  //   },
  //   {
  //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
  //     name: "Artificial Intelligence Paper",
  //     createdAt: "2020-03-06T16:26:54Z",
  //     description: "Paper Written on Artificial Intelligence published in xyz ",
  //     url:
  //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
  //   },
  //   {
  //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
  //     name: "Artificial Intelligence Paper",
  //     createdAt: "2020-03-06T16:26:54Z",
  //     description: "Paper Written on Artificial Intelligence published in xyz ",
  //     url:
  //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
  //   },
  //   {
  //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
  //     name: "Artificial Intelligence Paper",
  //     createdAt: "2020-03-06T16:26:54Z",
  //     description: "Paper Written on Artificial Intelligence published in xyz ",
  //     url:
  //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
  //   },
  //   {
  //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
  //     name: "Artificial Intelligence Paper",
  //     createdAt: "2020-03-06T16:26:54Z",
  //     description: "Paper Written on Artificial Intelligence published in xyz ",
  //     url:
  //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
  //   },
  // ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Aakash_animated_rect.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Java Backend, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://isupersky.medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Rohini, Delhi - 110089",
    locality: "Kanodar",
    country: "IN",
    region: "New Delhi",
    postalCode: "110089",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link:""// "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

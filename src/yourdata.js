// Skills Icons
import cssIcon from "./images/css3.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/js.svg"
import pythonIcon from "./images/python.svg"
import codeIcon from "./images/code.svg"
import html5Icon from './images/html5.svg'
import reduxIcon from './images/redux.svg'
import postgreSQLIcon from './images/postgresql.svg'
import npmIcon from './images/npms.svg'
import nodeJsIcon from './images/nodejs.svg'
// Social Icon
import LinkedInIcon from './images/LinkedIn.svg'
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Schuyler Luckey",
  headerTagline: [
    //Line 1 For Header
    "Building digital",
    //Line 2 For Header
    "products",
    //Line 3 For Header
    "and experiences",
  ],
  //   Header Paragraph
  headerParagraph:
    "I am an up-and-coming Software Engineer from Seattle, Wa. After bartending for close to a decade, I realized it was time for a change when Covid-19 hit. Since I've always had an affinity for computers, design, and technology, I decided to dive into Software Development and become a Full Stack Engineer. Take a look at what I've done below.",

  //Contact Email
  contactEmail: "schuylerluckey@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Cocktail Social", //Project Title - Add Your Project Title Here
      para:
        "This app is dedicated to sharing your favorite cocktails or sharing your new experiments and getting feedback. Here you can find out what your friends and peers are mixing up behind the bar.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://www.wsbtv.com/resizer/44JlN-VtBRqH1jP4myKUaY-RzXk=/1200x675/arc-anglerfish-arc2-prod-cmg.s3.amazonaws.com/public/PV3SJNEXFOPT7AMSJGEV5MCSKI.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://cocktailsocial.herokuapp.com/",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Pluck Pluck Choose", //Project Title - Add Your Project Title Here
      para:
        "Pluck Pluck Choose is a Tinder clone of sorts where you either pluck an animal pic or chuck a animal pic, check out the compare option for some good laughs.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAQb6cD9s9TTk6ZxvohxA3byGJQToHPv3tg&usqp=CAU",
      //Project URL - Add Your Project Url Here
      url: "https://pluck-pluck-choose.herokuapp.com/",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Luckey's Cocktail Finder", //Project Title - Add Your Project Title Here
      para:
        "This website utilizes the thecocktaildb API to allow users to search for the ingredient list and build process for almost any cocktail you can think of.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i2.wp.com/abarabove.com/wp-content/uploads/2018/12/P1-Vegan-Unfriendly-Ingredients.jpg?w=1080&ssl=1",
      //Project URL - Add Your Project Url Here
      url: "http://quixotic-name.surge.sh/index.html",
    },
    // {
    //   id: 4, //DO NOT CHANGE THIS (Please)😅
    //   title: "Project Four", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },
    // {
    //   id: 5, //DO NOT CHANGE THIS (Please)😅
    //   title: "Project Five", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },
    // {
    //   id: 6, //DO NOT CHANGE THIS (Please)😅
    //   title: "Project Six", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I am a dedicated, young Software Engineer who is eager to utilize my skills and continue to grow. I want to deliver the best UI and data storage possible.",
  aboutParaTwo:
    "I am a full stack developer who is comfortable with both back-end and front-end work.",
  aboutParaThree:
    "I am a recent graduate of General Assembly's Software Engineering Immersive program, which was an amazing and difficult program. I was challenged every day and learned how to meet goals and perform in a fast paced environment. I look forward to my next steps and the exciting world of software development.",
  aboutImage:
    "https://i.imgur.com/k5jZWC1.jpg",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: html5Icon,
      para:
        "HTML5 ",
    },
    {
      id: 2,
      img: cssIcon,
      para:
        "CSS3",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "JavasScript",
    },
    {
      id: 4,
      img: reactIcon,
      para:
        "React",
    },
    {
      id: 5,
      img: reduxIcon,
      para:
        "Redux",
    },
    {
      id: 6,
      img: pythonIcon,
      para:
        "Python",
    },
    {
      id: 7,
      img: postgreSQLIcon,
      para:
        "PostgreSQL",
    },
    {
      id: 8,
      img: npmIcon,
      para:
        "Npm",
    },
    {
      id: 9,
      img: nodeJsIcon,
      para:
        "NodeJs",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "My Brand",
  promotionPara:
    "I'm a sharp-eyed software engineer that enjoys debugging code. Due to my 8 years of bar tending experience I am naturally efficient, organized, and clean which translates easily into my work as a full stack and application developer.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, 
      url: "https://github.com/Gnarlyluck" },
    {
      img: LinkedInIcon,
      url: "https://www.linkedin.com/in/schuyler-luckey/",
    },
    // {
    //   img: dribbbleIcon,
    //   url: "https://dribbble.com/chetanverma",
    // },
    // {
    //   img: instagramIcon,
    //   url: "https://www.instagram.com/",
    // },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com

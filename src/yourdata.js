// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import LinkedInIcon from './images/LinkedIn.svg'
// Social Icon
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
    "I am an up and coming Software Engineer from Seattle, Wa. When Covid lockdowns happened I knew I needed a career change. I've always had a passion for computers and technology, so I made the choice to start diving into Software Development. Take a look at what I've done below.",

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
        "https://images.unsplash.com/photo-1601673732094-b0d6b8477bd4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTF8fGNvY2t0YWlsJTIwZmluZGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://cocktailsocial.herokuapp.com/",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Pluck Pluck Choose", //Project Title - Add Your Project Title Here
      para:
        "Pluck Pluck Choose is a Tinder clone of sorts where you either pluck an animal pic or chuck a animal pic, check out the ompare option for some good laughs.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1513333420772-7b64ad15ca96?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHF1b2trYXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
        "https://www.diffordsguide.com/assets/images/default/cocktails/cocktail-finder.jpg",
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
    "I am a dedicated, young Software Engineer who is eager to utilize my skills while continuing to learn new ones. I want to deliver the best UI and data storage possible.",
  aboutParaTwo:
    "I am a full stack developer who leans towards the back end, although I am comfortable on both sides.",
  aboutParaThree:
    "I recently graduated From Genral Assembly's Software Engineering Immersive program. It was an amazing and difficult program. I was challenged every day and through my perseverance, I graduated. I look forward to my next steps and the exciting world of software development.",
  aboutImage:
    "https://i.imgur.com/lcbO3hw.jpg",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: htmlIcon,
      para:
        "I am familiar and proficient in HTML5, it is the standard markup language for documents designed to be displayed in a web browser. ",
    },
    {
      id: 2,
      img: cssIcon,
      para:
        "I would say I meet requirements for CSS but I am not a styling wizard,",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "Javascript is my preffered language, although I can pick up an learn new languages with ease",
    },
    {
      id: 4,
      img: reactIcon,
      para:
        "I am proficient with React, React with hooks and I am confortable with React with Redux. React is great because working with the DOM API can be hard. React basically gives developers the ability to work with a virtual browser that is more friendly than the real browser. React’s virtual browser acts as an agent between the developer and the real browser.",
    },
    // {
    //   id: 5,
    //   img: designIcon,
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    // },
    // {
    //   id: 6,
    //   img: codeIcon,
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    // },
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

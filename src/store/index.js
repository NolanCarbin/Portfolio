import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headline: "Hi, I'm Nolan!",
    role: "Full stack software developer",
    bio: `I'm a highly motivated and goal-orientated individual with a passion for understanding how things work. 
        I enjoy taking on new challenges and working with others to create quality products.`,
    bio2: `I’m currently attending Tech Elevator to forge new skills in full-stack software development. 
        After graduation, I’m looking for an entry-level Software Developer role at a team-oriented company 
        where I can explore new technologies and create meaningful projects.`,
    email: "mailto:nolan2556@gmail.com",
    githubLink: "https://github.com/NolanCarbin",
    linkedInLink: "https://www.linkedin.com/in/nolancarbin/",
    resumeLink: "https://drive.google.com/file/d/1-WqkRFc4fq5SlDrbwsoMIFrz2kwn_MFe/view?usp=sharing",
    projects: [
      {
        name: "TEnmo",
        whatItIs: "hello",
        howItWasBuilt: "yes",
        functionality: ["this", "then", "there"],
        shortBio: "A virtual payment transfer service used to send and receive money from registered users.",
        link: "https://github.com/NolanCarbin/TEnmo",
        isFeatured: true
      },
      {
        name: "Vending Machine",
        whatItIs: "",
        howItWasBuilt: "",
        functionality: [],
        shortBio: "A vending machine CLI application that allows users to feed money, select products, and finish their transactions to receive change.",
        link: "https://github.com/NolanCarbin/Vendo-Matic-800",
        isFeatured: false
      },
      {
        name: "Pathfinding Builder",
        whatItIs: "",
        howItWasBuilt: "",
        functionality: [],
        shortBio: "A Tkinter GUI application that displays a grid where the user can move two end points around and visualize different pathfinding algorithms.",
        link: "https://github.com/NolanCarbin/Pathfinding-Builder",
        isFeatured: true
      },
      {
        name: "Dungeon Wizard",
        whatItIs: "",
        howItWasBuilt: "",
        functionality: [],
        shortBio: "A Roguelike 2D game, that includes randomly generated floors, monsters, bosses, and items. The player plays as a wizard, traversing multiple rooms and floors, searching for the boss room.",
        link: "https://github.com/NolanCarbin/15-112_Term_Project",
        isFeatured: true
      },
      {
        name: "Opentap",
        whatItIs: "",
        howItWasBuilt: "Implemented using Object-Orientated Programming, Java, Spring Boot, PostgreSQL, JDBC, Vue.js, MVC, and RESTful APIs",
        functionality: [],
        shortBio: "Team developed a full-stack web application used for searching for breweries in the Colorado area. Users can either create an account to leave reviews on beers listed by each brewery, or register as a brewer to add and update their own brewery's information.",
        link: "",
        isFeatured: true
      },
      {
        name: "Restaurant Finder",
        whatItIs: "",
        howItWasBuilt: "",
        functionality: [],
        shortBio: "",
        link: "",
        isFeatured: false
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

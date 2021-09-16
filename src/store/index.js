import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headline: "Hi, I'm Nolan!",
    role: "Full stack software developer",
    bio: `I'm a highly motivated and goal-orientated individual with a passion for understanding how things work. 
        I enjoy taking on new challenges and working with others to create quality products. 
        During my time in the music industry, I developed my leadership and communication skills by leading 
        a 25-member stage crew and managing the logistics of different productions and concerts. 
        I excel at finding new ways to improve upon solutions and keeping calm in a fast-paced environment. `,
    bio2: `I’m currently attending Tech Elevator to forge new skills in full-stack software development. 
        After graduation, I’m looking for an entry-level Software Developer role at a team-oriented company 
        where I can explore new technologies and create meaningful projects.`,
    projects: [
      {
        name: "TEnmo",
        description: "",
        link: "#",
        isFeatured: true
      },
      {
        name: "Vending Machine",
        description: "",
        link: "#",
        isFeatured: true
      },
      {
        name: "Pathfinding Builder",
        description: "",
        link: "#",
        isFeatured: true
      },
      {
        name: "Dungeon Wizard",
        description: "",
        link: "#",
        isFeatured: true
      },
      {
        name: "aaa",
        description: "",
        link: "#",
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

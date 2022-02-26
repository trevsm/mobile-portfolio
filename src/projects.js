import { github } from "@trevsm/urls";

export const projects = [
  {
    title: "TastySpore",
    description: "Discover delicious mushrooms & tasty new recipes.",
    languages: ["Typescript", "React", "Gatsby", "Graphql"],
    links: { ...github.projects.tastySpore },
  },
  {
    title: "Devices",
    description:
      "View super fast screenshots of any website in multiple device formats at once.",
    languages: ["React", "Node", "Puppeteer"],
    links: {
      live: "http://devices.red/",
      source: "https://github.com/trevsm/mydevices",
    },
  },
  {
    title: "My Room",
    description:
      "Digital 3D & Artistic Experience of what my room might look like based on my experience/skills.",
    languages: ["React", "Three", "Blender"],
    links: { ...github.projects.room3d },
  },
  {
    title: "WhenToWakeUp",
    description:
      "Find when is the best time to wake up if you went to bed right now.",
    languages: ["React"],
    links: { ...github.projects.whenToWakeup },
  },
  {
    title: "WhatGPU?!",
    description: "Find out online what GPU you are using.",
    languages: ["React", "Threejs"],
    links: { ...github.projects.whatGpu },
  },
  {
    title: "Satisfying 24h Clock",
    description: "Oddly Satisfying 24 hour clock recreation.",
    languages: ["React"],
    links: { ...github.projects.clock },
  },
];

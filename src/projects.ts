import { github } from "@trevsm/urls";

export interface Project {
  title: string;
  description: string;
  languages: string[];
  links: { source?: string; live?: string };
  image?: {
    source: string;
    position?: string;
  };
}

export const projects: Project[] = [
  {
    title: "TastySpore",
    description: "Discover delicious mushrooms & tasty new recipes.",
    languages: ["Typescript", "React", "Gatsby", "Graphql"],
    links: { ...github.projects.tastySpore },
    image: { position: "center", source: "/images/tastyspore.png" },
  },
  {
    title: "My Room",
    description:
      "Digital 3D & Artistic Experience of what my room might look like based on my experience/skills.",
    languages: ["React", "Three", "Blender"],
    links: { ...github.projects.room3d },
    image: { position: "center", source: "/images/3droom.png" },
  },
  {
    title: "WhenToWakeUp",
    description:
      "Find when is the best time to wake up if you went to bed right now.",
    languages: ["React"],
    links: { ...github.projects.whenToWakeup },
    image: { position: "top", source: "/images/whentowakeup.png" },
  },
  {
    title: "Satisfying 24h Clock",
    description: "Oddly Satisfying 24 hour clock recreation.",
    languages: ["React"],
    links: { ...github.projects.clock },
    image: { position: "center", source: "/images/clock.png" },
  },
  {
    title: "WhatGPU?!",
    description: "Find out online what GPU you are using.",
    languages: ["React", "Threejs"],
    links: { ...github.projects.whatGpu },
    image: { position: "center", source: "/images/gpu.png" },
  },
];

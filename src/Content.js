import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoMdContact } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdApps } from "react-icons/io";

export const content = {
  nav: [
    {
      link: "#home",
      icon: IoMdContact,
    },
    {
      link: "#skills",
      icon: HiOutlineLightBulb,
    },
    {
      link: "#projects",
      icon: IoMdApps,
    },
    {
      link: "#contact",
      icon: MdAlternateEmail,
    },
  ],
  hero: {
    title: "Frontend Developer",
    firstName: "PALVI",
    LastName: "DHAWAN",
    hero_content: [
      {
        count: "6+",
        text: "Years of Experinse in Frontend development.",
      },
      {
        text: "With track record of successfully delivering user-friendly web apps.",
      },
      
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Frontend",
        para: ["React JS", "React Native", "JavaScript", "TypeScript", "HTML", "CSS/SCSS", "Angular"],
      },
      {
        name: "Backend",
        para: ["Node.js", "Rest APIs", "Express.js", "SpringBoot"],
      },
      {
        name: "Testing",
        para: ["JEST  ", "RTL", "Jasmine"],
      },
      {
        name: "DevOps",
        para: ["Docker", "Kubernetes", "Jenkins", "Gocd", "CI/CD"],
      }
    ],
    icon: MdArrowForward,
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "palvidhawan8@gmail.com",
        icon: GrMail,
        link: "mailto:palvidhawan8@gmail.com",
      },
      {
        text: "+91 8284913477",
        icon: MdCall,
        link: "https://wa.me/8284913477",
      },
      {
        text: "palvi-dhawan",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/palvi-dhawan-5a1241136/",
      },
      {
        text: "palvi8",
        icon: FaGithub,
        link: "https://github.com/palvi8",
      },
    ],
  },
};

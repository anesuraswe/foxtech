import { BotMessageSquare } from "lucide-react";
import { BrainCircuit } from "lucide-react";
import { Cpu } from "lucide-react";
import { CodeXml } from 'lucide-react';
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Services", href: "#" },
  { label: "Store", href: "#" },
  { label: "Classes", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Maxcen Chikuwira",
    company: "Parent",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Tanaka Kamuti",
    company: "Parent",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "Heather Mambudzi",
    company: "Girls High School",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Lauryn Smith",
    company: "Undergrad Student",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Anesu Nyamajiwa",
    company: "Parent",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  
];

export const features = [
  {
  icon: <BotMessageSquare />,
  text: "Robotics Classes",
  description:
    "Hands-on training in robotics fundamentals, including sensors, actuators, microcontrollers, and real-world automation projects.",
},
{
  icon: <Cpu />,
  text: "Electronic Components Store",
  description:
    "A fully stocked shop offering microcontrollers, sensors, modules, cables, tools, and other essential electronic parts for your projects.",
},
{
  icon: <PlugZap />,
  text: "IoT Integration",
  description:
    "End-to-end solutions for connecting devices, sensors, and systems through reliable IoT architectures and cloud-based automation.",
},
{
  icon: <BrainCircuit />,
  text: "AI & ML Solutions",
  description:
    "Custom artificial intelligence and machine learning models designed to enhance automation, prediction, and decision-making in your applications.",
},
{
  icon: <CodeXml />,
  text: "Software Development",
  description:
    "Full-cycle software engineering services, including front-end, back-end, and embedded systems development tailored to your requirements.",
},
{
  icon: <GlobeLock />,
  text: "Secure Websites",
  description:
    "Development of fast, scalable, and secure websites with modern encryption, authentication, and cybersecurity best practices.",
},

];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your embedded apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your embedded apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your embedded apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your embedded apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
  title: "Infants",
  price: "$30",
  features: [
    "Basic introduction to robots and simple machines",
    "Hands-on building with safe, age-friendly robotics kits",
    "Foundational coding using visual block tools",
    "Creative activities that develop problem-solving skills",
  ],
},
{
  title: "Primary",
  price: "$20",
  features: [
    "Structured robotics lessons using beginner kits",
    "Introduction to sensors, motors, and simple automation",
    "Block-based programming (Scratch / LEGO-style coding)",
    "Weekly mini-projects to reinforce STEM concepts",
  ],
},
{
  title: "High School",
  price: "$40",
  features: [
    "Advanced robotics design and engineering concepts",
    "Microcontroller programming (Arduino / Micro:bit)",
    "Electronics fundamentals: circuits, sensors, and actuators",
    "Team-based robotics projects and competition preparation",
  ],
},

];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Learn Robotics" },
  { href: "#", text: "Electronics Shop" },
  { href: "#", text: "Previous Work" },
  { href: "#", text: "Meet the team" },
];

export const platformLinks = [
  { href: "#", text: "WhatsApp" },
  { href: "#", text: "Telegram" },
  { href: "#", text: "LinkedIn" },
  { href: "#", text: "Github" },
  { href: "#", text: "TikTok" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

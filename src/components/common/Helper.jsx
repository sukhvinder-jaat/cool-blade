import { Contact, Leaf, Plus, ProblemCenter, Team } from "./Icon";
import cnn from "../../assets/usa/cnn.png";
import today from "../../assets/usa/today.png";
import news from "../../assets/usa/news.png";
import cbs from "../../assets/usa/cbs.png";
import sign from "../../assets/usa/sign.png";
import forb from "../../assets/usa/forb.png";
import npr from "../../assets/usa/npr.png";
import nbc from "../../assets/usa/nbc.png";
import student from "../../assets/join_our_community/student.svg";
import farmer from "../../assets/join_our_community/farmer.svg";
import waste from "../../assets/join_our_community/waste.svg";
// nav bar links
export const navLink = [
  { link: "home", href: "#home", icon: <Plus /> },
  { link: "About Us", href: "#about", icon: <Leaf /> },
  { link: "Problem Statement", href: "#problem", icon: <ProblemCenter /> },
  { link: "Team", href: "#team", icon: <Team /> },
  { link: "contact us", href: "#contact", icon: <Contact /> },
];
// usa images
export const usaImage = [
  { path: cnn, width: "max-w-[64px]" },
  { path: today, width: "max-w-[137px]" },
  { path: news, width: "max-w-[99px]" },
  { path: cbs, width: "max-w-[95px]" },
  { path: sign, width: "max-w-[41px]" },
  { path: forb, width: "max-w-[106px]" },
  { path: npr, width: "max-w-[94px]" },
  { path: nbc, width: "max-w-[52px]" },
];
// joinProfile
export const joinProfile = [
  { profile: student, title: "I'm a Student" },
  { profile: farmer, title: "I'm a Farmer" },
  { profile: waste, title: "I make agricultural waste" },
];

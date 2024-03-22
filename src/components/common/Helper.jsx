import {
  Contact,
  Email,
  Leaf,
  Location,
  Mobile,
  Plus,
  ProblemCenter,
  Team,
} from "./Icon";
import cnn from "../../assets/usa/cnn.webp";
import today from "../../assets/usa/today.webp";
import news from "../../assets/usa/news.webp";
import cbs from "../../assets/usa/cbs.webp";
import sign from "../../assets/usa/sign.webp";
import forb from "../../assets/usa/forb.webp";
import npr from "../../assets/usa/npr.webp";
import nbc from "../../assets/usa/nbc.webp";
import student from "../../assets/join_our_community/student.svg";
import farmer from "../../assets/join_our_community/farmer.svg";
import waste from "../../assets/join_our_community/waste.svg";
import woodImage1 from "../../assets/problem/wood1.webp";
import woodImage2 from "../../assets/problem/wood2.webp";
import woodImage3 from "../../assets/problem/wood3.webp";
import woodImage4 from "../../assets/problem/wood4.webp";
import moss from "../../assets/team/harper.png";
import tom from "../../assets/team/tom.png";
import ray from "../../assets/team/ray.png";
import chad from "../../assets/team/chad.png";
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
// contact
export const contact = [
  { href: "tel:9306922645", icon: <Mobile />, title: "+52 (55) 65990366" },
  {
    href: "#address",
    icon: <Location />,
    title: "1 De Haro St. San Francisco, CA 94107 (415) 985-2400",
  },
  {
    href: "mailto:info@address.com",
    icon: <Email />,
    title: "info@address.com",
  },
];
// team
export const teamProfile = [
  {
    profile: moss,
    title: "Harper Moss",
    post: "Co-Founder CEO",
    description: [
      "Harper Moss, at just 16 years old, conceived the idea for CarbonZero.eco out of a desire to better the world. Her initial exploration led her through avenues such as tree planting in the Amazon and soil amendments.",
      "However, it was in conversations with leaders in the CDR industry that illuminated the enormous potential of BioChar for carbon removal.",
    ],
  },
  {
    profile: tom,
    title: "Tom Moss",
    post: "Co-Founder President",
    description: [
      "Harper Moss's father is a multi-exited serial entrepreneur with extensive experience in hardware and software.",
      "He served as an Android executive at Google from 2007 to 2010, founded and served as CEO of 3LM (acquired by Motorola), was an Entrepreneur in Residence at Accel Partners, founded and served as CEO of Nextbit (acquired by Razer), served as Senior Vice President and General Manager of Mobile at Razer, and co-founded several other successful startups, including one that went public. ",
      "Currently, he is the CEO of Skydio GK, the Asia-Pacific subsidiary of Skydio Inc., the maker of the world's most advanced autonomous drones.",
    ],
  },
  {
    profile: ray,
    title: "Gregory Ray",
    post: "Co-Founder COO",
    description: [
      "Over the past two decades, Gregory has built and managed businesses. In 2007, he co-founded OEM.com, linking suppliers in the east with buyers in the west. The following year, he co-founded Seek Mobile Interactive, creators of the first 3D gaming engine for the newly launched Apple iPhone.",
      "Their SeekTech engine powered the top-grossing game, Riddim Ribbon, designed by will.i.am of the Black Eyed Peas. Tapulous acquired SeekTech, later becoming Disney Mobile post-acquisition by The Walt Disney Company.",
    ],
  },
  {
    profile: chad,
    title: "Chad Jensen",
    post: "Plant Engineer",
    description: [
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks",
    ],
  },
];
// problem Wood
export const problemWood = [woodImage1, woodImage2, woodImage3, woodImage4];

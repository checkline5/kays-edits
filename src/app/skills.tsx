"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Strategic Sourcing:",
    children:
      "  Providing smarter, scalable sourcing strategies that align with your goals, delivering the right solutions at the right price.",
  },
  {
    icon: FingerPrintIcon,
    title: "Supplier Management",
    children:
      " From vetting to quality control, we ensure you work with trusted, reliable partners every time.",  
  },
  // {
  //   icon: SwatchIcon,
  //   title: "Technology Stack",
  //   children:
  //     "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.",
  // },
  {
    icon: HashtagIcon,
    title: "Contract Negotiation",
    children:
      " Protect your interests with expertly negotiated contracts, maximizing value and minimizing risk.",
},
  // {
  //   icon: EyeIcon,
  //   title: "User-Centric Design",
  //   children:
  //     "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
  // },
  {
    icon: DocumentTextIcon,
    title: "Logistics Coordination",
    children:
      " A streamlined approach to logistics management, from start to finish.",
    },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
        Services
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          Tailored Solutions to Meet Your Every Need
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;

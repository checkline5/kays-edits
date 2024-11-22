"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Global Reach, Local Expertise. Connecting you with reliable suppliers worldwide",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Efficiency Meets Excellence. Precision in procurement from start to finish.",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Driven by Results. Focused on outcomes that matter to your business.",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            The Diverse Advantage
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
          With years of proven expertise in the procurement industry, Diverse Supplies delivers unparalleled solutions that businesses trust. Our track record speaks volumes: seamless sourcing, reliable partnerships, and a commitment to excellence.
From local startups to global enterprises, our extensive experience has equipped us with the insights and strategies to meet diverse needs. When you choose Diverse Supplies, you’re not just partnering with a supplier—you’re gaining a trusted ally in your success.
          </Typography>
          <Button
            variant="text"
            color="gray"
            className="flex items-center gap-2"
          >
            view more
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </Button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;

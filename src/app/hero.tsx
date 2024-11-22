"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            placeholder=""
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Sourcing Success, Every Step of the Way
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
           Unlock a world of streamlined procurement solutions tailored for efficiency and growth with Diverse. 
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/freight.jpg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>

    </header>
  );
}

export default Hero;

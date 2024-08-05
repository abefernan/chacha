"use client";

import { Chacha } from "@/types/chacha";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type ChachaCardProps = {
  chacha: Chacha;
};

export function ChachaCard({ chacha }: ChachaCardProps) {
  return (
    <CardContainer className="inter-var" containerClassName="py-0">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          <div className="flex gap-2 items-center">
            <Avatar>
              <AvatarImage src={chacha.user.pfpUrl} />
              <AvatarFallback>{chacha.user.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <p>{chacha.user.name}</p>
              <p className="text-sm">{chacha.user.address}</p>
            </div>
          </div>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {chacha.date.toLocaleString()}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={chacha.imgUrl}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-4">
          <CardItem
            translateZ={20}
            target="__blank"
            className="py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {chacha.verifications < 3
              ? `${chacha.verifications} / 3 verifications`
              : "Verified!"}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Verify
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

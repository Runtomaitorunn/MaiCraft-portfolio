import React from 'react';
import {Metadata} from "next";
import Hero from "@/src/components/hero";

export const metadata: Metadata = {
  title: 'The Music Box',
}

export default function Page(){
  return(
    <Hero imgUrl="/placeholder.jpeg" altTxt="TheMusicBox" content = "My Projejct - The Music Box"/>
  );
}
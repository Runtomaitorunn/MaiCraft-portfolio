import React from 'react';
import {Metadata} from "next";
import Hero from "@/src/components/hero";

export const metadata: Metadata = {
  title: 'BeatBoxVR',
}

export default function Page(){
  return(
    <Hero imgUrl="/placeholder.jpeg" altTxt="BBVR" content = "My Projejct - BeatBoxVR"/>
  );
}
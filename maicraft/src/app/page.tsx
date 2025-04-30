import React from 'react';
import Image from 'next/image';
import homeSrc from '/public/home.jpg';
import {Metadata} from "next";
import Hero from "@/src/components/hero";

export const metadata: Metadata = {
  title: 'Home',
}

export default function Page(){
  return(
    <Hero imgUrl="/home.webp" altTxt="Home" content = "MaiCraft"/>
  );
}

import Image from 'next/image'
import React from 'react'

interface IProps{
    imgUrl:string;
    altTxt:string;
    content:string
}

export default function Hero(props:IProps){
    return(
        <div className = 'h-screen realtive'>
            <div className = 'absolute inset-0 -z-10'>
                <Image src = {props.imgUrl} fill style = {{objectFit:'cover'}} alt ={props.altTxt}/>
                <div className = 'absolute inset-0 bg-gradient-to-r from-fray-950'></div>
            </div>
            <div className = 'flex justify-center pt-48'>
                <h1 className = 'text-white text-6x1'>{props.content}</h1>
            </div>
        </div>
    )
}
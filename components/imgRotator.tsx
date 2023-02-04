"use-client"
import React, {useState,useEffect} from 'react'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'

export default function ImgRotator( { timerLength = 3000 } = {}) {
  //   const [isPlaying, setIsPlaying] = useState(true)
   const [currIndex, setCurrIndex] = useState(0)

   const slides:string[] = ["/img/img1.jpg","/img/img4.jpg","/img/img2.jpg","/img/img3.jpg","/img/img5.jpg","/img/img6.jpg",];
 
   useEffect(() => {
    /*  if (isPlaying) { */
       const timer = setTimeout(
         () => setCurrIndex((currIndex + 1) % slides.length),
         timerLength
       )
 
       return () => clearTimeout(timer)
     
   }, [currIndex])
 
  /*  const updateSlide = () => {
     if (typeof direction === "number") {
       return setCurrIndex(direction)
     }
 
     if (direction === "next") {
       return setCurrIndex((currIndex + 1) % slides.length)
     } 
 
     return setCurrIndex((currIndex - 1 + slides.length) % slides.length)
   }*/
 
   return (

      <Image
      style={{ display:'flex' , justifyContent:'flex-end'
   }}
      src={slides[currIndex]}
      key={currIndex}
      alt=""
      width={800}
      height={300}
 
    />
    
   )}
 













/* import React, { useState, useEffect } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

function ImgRotator({ data }) {
 
   const allImages = data.allFile.edges;
   const [currentImage, setCurrentImage] = useState({});
    var num = 0
   //const imgLenth=allImages.length;
 
   useEffect(() => {
      const interval = setInterval(() => {

         setCurrentImage(allImages[num].node.childImageSharp.gatsbyImageData)
      
         num < 10 ? num++ : num = 0;
    
      }, 5000);
      return () => clearInterval(interval);
   }, [num]);

   return (
      <GatsbyImage
         image={currentImage}
         key={num}
         alt=""
         loading="eager"
         style={{width:'100%',height:'auto'}} />
   );
}

export default ImgRotator; */
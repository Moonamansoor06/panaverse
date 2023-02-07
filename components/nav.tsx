"use-client"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Spacer,
  } from '@chakra-ui/react'
  import { Box,Text,Flex } from "@chakra-ui/react"
  import Image from 'next/image'

export default function Nav(){
    
    return(

<div >
     <Flex direction={{ base: 'column', lg: 'row' }}
      bgGradient='linear(to-r, green.200, blue.500)'> 
      
    <Image src='/logo.png' alt="" width={80} height={80}/>
    <Spacer/>
<Breadcrumb > 
  <BreadcrumbItem>
    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href='/courses'>Courses</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href='/detailedCourse '>Detailed Courses</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href='/specializedTracks '>Specialized Tracks</BreadcrumbLink>
  </BreadcrumbItem>

  
</Breadcrumb>
</Flex>
<Box height={{ base: '100%',  md: '50%', xl: '25%',  }} width={['100%']} bgGradient='linear(to-r, green.200, blue.500)' >
   
<Text
  bgGradient='linear(to-l, #011f4b,	#2a623d)'
  bgClip='text'
  fontSize={['4xl','6xl','6xl']}
  fontWeight='extrabold'
  align='center'
>
Certified Web 3.0 and Metaverse Developer
</Text>
<Text
  bgGradient='linear(to-l, #011f4b,	#2a623d)'
  bgClip='text'
  fontSize={['2xl','4xl','4xl']}
  fontWeight='bold'
  align='center'
>
A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
</Text>
<Text
  bgGradient='linear(to-l, #011f4b,	#2a623d)'
  bgClip='text'
  fontSize={['2xl','4xl','4xl']}
  fontWeight='bold'
  align='center'
>
Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users
</Text></Box>
</div>
 
    )
}
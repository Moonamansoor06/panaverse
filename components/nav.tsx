"use-client"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
  import { Box,Text } from "@chakra-ui/react"
  import Image from 'next/image'

export default function Nav(){
    
    return(

<div >
     <Box  height={{ base: '100%',  md: '50%', xl: '25%',  }} width={['100%']}
      display='flex'  alignContent='space-between' justifyContent='space-between '
      bgGradient='linear(to-r, green.200, blue.500)'> 
      
    <Image src='/logo.png' alt="" width={80} height={80}/>
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

  
</Breadcrumb>
</Box>
<Box height={{ base: '100%',  md: '50%', xl: '25%',  }} width={['100%']} bgGradient='linear(to-r, green.200, blue.500)' >
   
<Text
  bgGradient='linear(to-l, #011f4b,	#2a623d)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'
  align='center'
>
Certified Web 3.0 and Metaverse Developer
</Text>
<Text
  bgGradient='linear(to-l, #011f4b,	#2a623d)'
  bgClip='text'
  fontSize='2xl'
  fontWeight='extrabold'
  align='center'
>
A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
</Text>
<Text
  bgGradient='linear(to-l, #011f4b,	#2a623d)'
  bgClip='text'
  fontSize='xl'
  fontWeight='extrabold'
  align='center'
>
Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users
</Text></Box>
</div>
 
    )
}
"use-client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import HomeComponent from '@/components/homeComponent'
import CoreCourse from '../components/coreCourses'
import SpecializedTracks from '../components/specializedTracks'
import { Container, Flex } from '@chakra-ui/react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <Container width={{ [312]:"100%", base: "100%",sm:"100%",md:"full", lg: "full" }}>
    
   <HomeComponent/>
   <CoreCourse/>
   <SpecializedTracks/>
   </Container>
  )
}

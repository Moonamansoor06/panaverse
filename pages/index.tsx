"use-client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import HomeComponent from '@/components/homeComponent'
import CoreCourse from '../components/coreCourses'
import SpecializedTracks from '../components/specializedTracks'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    
   <HomeComponent/>
   <CoreCourse/>
   <SpecializedTracks/>
   </div>
  )
}

"use-client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import HomeComponent from '@/pages/homeComponent'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    
   <HomeComponent/>
   </div>
  )
}

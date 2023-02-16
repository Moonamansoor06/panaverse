"use-client"

  import { CardFooter,Button,Box,Heading,Text,Card, Flex, Spacer } from "@chakra-ui/react"
  import ImgRotator from '../components/imgRotator'
  import { useRouter } from 'next/navigation';
export default function HomeComponent(){
    const router=useRouter()
    return(
   
      <Box  height='100%' width={['100%']}
             marginTop={['8','8','9']}
            
  > 
<Flex direction={{ base: 'column', lg: 'row' }} >

<Card p='2' w={{"lg": '50%', "sm": '100px'}} >
<Heading  size='md' p='2'>Program of Studies</Heading>
      <Text   py='2' lineHeight='8' padding='2'>
This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialities and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a year-long hybrid programme that includes both onsite and online classes and is divided into four quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
   </Text>
   <CardFooter display='flex' alignItems='right' justifyContent='right'>
      <Button  onClick={() => router.push('https://www.piaic.org/')} size="md" variant='solid' bgColor='gray.100' color='blue.700'>
      Addmission Website
      </Button>
     
    </CardFooter>
 </Card>
 <Spacer/>
 <Card p='2' pt='4' w={{"lg": '50%', "sm": '100px'}}>     
   <ImgRotator />      
   </Card>
    </Flex>
     </Box>
    )
}
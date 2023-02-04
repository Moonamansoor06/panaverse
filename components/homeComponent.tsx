"use-client"

  import { Box,Heading,Text,Card,Stack,CardBody,CardFooter,Button } from "@chakra-ui/react"
  import ImgRotator from '../components/imgRotator'

export default function HomeComponent(){
    
    return(
      <Box  height={{ base: '100%',  md: '50%', xl: '25%',  }} width={['95%']}
      display='flex' flexDirection='column' padding='2' margin='8'  
      borderWidth='1px' borderRadius='lg' borderColor='lightgray' borderTopWidth='10px' borderTopColor='black'> 


<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
 <ImgRotator />
  <Stack>
    <CardBody>
      <Heading >Need to study Metaverse technology</Heading>

      <Text py='2'>
      The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. The internet is without a doubt the most important technological development in human history. Web3 and metaverse technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud computing, voice computing, ambient computing, and more. Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centred on decentralised technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.
      </Text>
    </CardBody>

  </Stack>
</Card>
    
      <Box  height={{ base: '100%',  md: '50%', xl: '25%',  }} width={['100%']}
      alignContent='stretch' justifyContent='stretch'> 
      <Heading>Program of Studies</Heading>
      <Text   py='2' >
This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialities and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a year-long hybrid programme that includes both onsite and online classes and is divided into four quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
   </Text>
  </Box>
  </Box>
    )
}
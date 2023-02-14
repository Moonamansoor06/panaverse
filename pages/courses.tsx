"use-client"
import { Card, Heading, Text,Box,CardHeader,CardBody,Stack,StackDivider,CardFooter,Button } from "@chakra-ui/react"
import Link from "next/link";
import { useRouter } from 'next/navigation';
export default function Courses(){
    const router = useRouter();
    return(
        <Box  height={{ base: '100%',  md: '50%', xl: '25%',  }} width={['95%']}
        display='flex' flexDirection='column' padding='2' margin='8'  
        borderWidth='1px' borderRadius='lg' borderColor='lightgray' borderTopWidth='10px' borderTopColor=' blue.500'> 
  
  <Card>
  <CardHeader>
    <Heading size='md'>Core Courses (Common in All Specializations)</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Every participant of the program will start by completing the following two core courses:
        </Heading>
        <Text pt='2' fontSize='md'>
         
Quarter I (Core) CS-101: Object-Oriented Programming using TypeScript

Quarter II (Core) W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform

        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Specialized Tracks
        </Heading>
        <Text pt='2' fontSize='sm'>
       
After completing the first two quarters the participants will select one or more specializations consisting of two courses each:

        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Web 3.0 (Blockchain) and Metaverse Specialization
        </Heading>
        <Text pt='2' fontSize='sm'>
        

This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse 
experiences for the next generation of the internet by specializing in building worlds that merge the
 best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
</Text>
<Text pt='2' fontSize='sm'>
Quarter III W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
</Text>
<Text pt='2' fontSize='sm'>
Quarter IV MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Artificial Intelligence (AI) and Deep Learning Specialization
        </Heading>
        <Text pt='2' fontSize='sm'>
        Artificial Intelligence (AI) and Deep Learning Specialization
The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.

</Text>
<Text pt='2' fontSize='sm'>
Quarter III AI-351: Developing Planet-Scale Intelligent APIs and Python Programming
</Text>
<Text pt='2' fontSize='sm'>
Quarter IV AI-361: Deep Learning and MLOps
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Cloud-Native Computing Specialization
        </Heading>
        <Text pt='2' fontSize='sm'>
      
The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.

</Text>
<Text pt='2' fontSize='sm'>
Quarter III CN-351: Certified Kubernetes Application Developer (CKAD)
</Text>
<Text pt='2' fontSize='sm'>
Quarter IV CN-361: Developing Multi-Cloud APIs using CDK for Terraform
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Ambient Computing and IoT Specialization
        </Heading>
        <Text pt='2' fontSize='sm'>
        The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter and Embedded Devices.

</Text>
<Text pt='2' fontSize='sm'>
Quarter III AC-351: Ambient Computing with Voice Assistants and Matter Devices
</Text>
<Text pt='2' fontSize='sm'>
Quarter IV AC-361: Embedded Programming using C and Rust
        </Text>
      </Box>
   
    
    <Box>
        <Heading size='md' textTransform='uppercase'>
        The Outcome for Participants of the Program
        </Heading>
        <Text pt='2' fontSize='sm'>
        The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.
</Text>
<Text color='gray' textDecoration='underline' pt='2' fontSize='lg'>
<Link  href='https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms'>Top 5 ‘Metaverse’ jobs that will rule the future of tech industry</Link>
</Text>
<Text color="gray"  textDecoration='underline' pt='2' fontSize='lg'>
<Link  href='https://web3.career/web3-salaries/blockchain-developer'>Blockchain Developer Salary - Jun 2022</Link>
</Text>
<Text color="gray"  textDecoration='underline' pt='2' fontSize='lg'>
<Link  href='https://thedefiant.io/web3-soaring-salaries'>Web3 Salaries Soar to $750,000 for Rank-and-File Devs</Link>
</Text>
<Text color="gray"  textDecoration='underline' pt='2' fontSize='lg'>
<Link  href='https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022'>The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters</Link>
</Text>
<Text color="gray"  textDecoration='underline' pt='2' fontSize='lg'>
<Link href='https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/'>How To Become Metaverse Developer: Scope, Skills, and Salary</Link>

</Text>

      </Box>
    
 </Stack>
  </CardBody>
  <CardFooter >
      <Button onClick={() => router.push('https://www.piaic.org/')} variant='solid' colorScheme='blue'>
      Addmission Website
      </Button>
     
    </CardFooter>
</Card>


 </Box>
    )
}
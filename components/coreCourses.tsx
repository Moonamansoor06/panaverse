"use-client";
import {
  SimpleGrid,
GridItem,
Stack,
  Heading,
  Text,
  Box,
  
} from "@chakra-ui/react";

import Link from "next/link";
import { coreData } from "@/data/page-data";
import { Image } from "@chakra-ui/react";

interface Data {
  data: {
    no: string;
    id: string;
    description: string;
    pic: string;
  }[];
}

export default function CoreCourse() {
  const { data }: Data = coreData;
  return (
    <Box id="core" marginTop={["2","2","20","20"]} marginBottom={["2","40","60"]} 
    height="auto" paddingTop={["2","40","40"]} 
    width={{ base: "100%",sm:"100%",md:"100%", lg: "100%" }}  >
    <Stack  alignItems="center" ml="2"
          mr="2">
    <Heading  size="2xl">Core Courses</Heading>
    <Text size="md" marginBlock="8" fontWeight="bold">
      Common in all specializations</Text>
    </Stack>
   
   <SimpleGrid minChildWidth={["64","72","96"]} gap="6" id="core">
      {data.map((d, i) => {
        return (
          
          <GridItem 
   
          marginTop="10"
          key={i}
          height="auto"
          boxShadow="dark-lg"
          p="2"
          ml="2"
          mr="2"
        >
              
                <Image src={d.pic} alt="" 
              height={300}
              width="100%"
              objectFit="cover" />
              
              <Stack  mt="10" padding="2"  >
                <Heading size="md">Quarter {d.no}</Heading>
                <Text fontWeight="bold">Quarter Id:</Text>
                <Text> {d.id} </Text>
                <Text fontWeight="bold">Description:</Text> 
                <Text>{d.description}</Text>
              </Stack>
             
            </GridItem>
       
        );
      })}
       </SimpleGrid>
       </Box>
  );
}
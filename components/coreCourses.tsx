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
    <Box
    height="100%"
    width={["100%", "100%", "100%"]}
      padding="2"
    marginTop="8"
  >
    <Stack margin="10" alignItems="center">
    <Heading  size="2xl">Core Courses</Heading>
    <Text size="md" marginBlock="8" fontWeight="bold">Common in all specializations</Text>
    </Stack>
      <Stack margin="10">
    <Heading size="2xl"></Heading>
    <Text size="md" marginBlock="8" fontWeight="bold"></Text>
    </Stack>
   <SimpleGrid minChildWidth="96" gap={2} id="core">
      {data.map((d, i) => {
        return (
          
          <GridItem 
          margin={4}
          marginTop="10"
          key={i}
          height="auto"
          boxShadow="dark-lg"
        >
              
                <Image src={d.pic} alt="" 
              height={300}
              width="100%"
              objectFit="cover" />
              
              <Stack  mt="10" padding="2" maxHeight={200} >
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

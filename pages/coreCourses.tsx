"use-client";
import {
  Card,
  Heading,
  Text,
  Box,
  Container,
  CardBody,
  Stack,
  StackDivider,
  Divider,
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
      height={{ base: "100%", md: "50%", xl: "25%" }}
      width={["100%", "100%", "100%"]}
      display="flex"
      flexDirection={{base:"column",sm:"column",md:"row",lg:"row"}}
      justifyContent="space-around"
      alignItems="center"
      padding="2"
      marginTop="8"
    >
      {data.map((d, i) => {
        return (
          <Card marginTop="10" key={i}  width={400} height={500} boxShadow="dark-lg">
            
              
                <Image src={d.pic} alt="" height={200} width={400} objectFit="cover" />
              
              <Stack  mt="10" padding="2" maxHeight={200} >
                <Heading size="md">Quarter {d.no}</Heading>
                <Text fontWeight="bold">Quarter Id:</Text>
                <Text> {d.id} </Text>
                <Text fontWeight="bold">Description:</Text> 
                <Text>{d.description}</Text>
              </Stack>
             
            
          </Card>
        );
      })}
    </Box>
  );
}

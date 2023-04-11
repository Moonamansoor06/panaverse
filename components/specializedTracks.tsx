"use-client";
import {
  SimpleGrid,
  Heading,
  Text,
  Box,
  GridItem,
  Stack,
} from "@chakra-ui/react";

import Link from "next/link";
import { spData } from "@/data/page-data";
import { Image } from "@chakra-ui/react";

interface SpecialData {
  data: {
    SpName: string;
    description?: string;
    Quarter4: string;
    Quarter5: string;
    pic: string;
  }[];
}

export default function SpecializedTracks() {
  const { data }: SpecialData = spData;
  return (
    <Box  marginTop={["2","2","20","20"]} marginBottom={["2","40","60"]} 
    height="auto" paddingTop={["2","40","40"]} 
    width={{ base: "100%",sm:"100%",md:"100%", lg: "100%" }} >

      <Stack display="flex" justifyContent="center" alignItems="center" ml="2"
          mr="2">
    <Heading  size="2xl"id="special">Specialized Tracks</Heading>
    <Text display="flex"
     justifyContent="center" 
     alignSelf="center" 
     alignContent="center" size="md"  fontWeight="bold">
      After completing three core quarters select specialization</Text>
    </Stack>
    <SimpleGrid minChildWidth={["64","72","96"]}    gap="6" id="special">
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
            <Image
              src={d.pic}
              
              alt=""
              height={300}
              width="100%"
              objectFit="cover"
            />

            <Stack mt="10" padding="2">
              <Heading size="md">Quarter: {d.SpName}</Heading>
              <Text fontWeight="bold">Description:</Text>{" "}
              <Text> {d.description} </Text>
              <Text fontWeight="bold">Quarter 4:</Text>{" "}
              <Text> {d.Quarter4}</Text>
              <Text fontWeight="bold">Quarter 5:</Text>{" "}
              <Text> {d.Quarter5}</Text>
            </Stack>
          </GridItem>
        );
      })}
    </SimpleGrid>
    </Box>
  );
}

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
    <Box
    height="100%"
    width={["100%", "100%", "100%"]}
      padding="2"
    marginTop="8"
  >
      <Stack margin="10" alignItems="center">
    <Heading  size="2xl">Specialized Tracks</Heading>
    <Text size="md" marginBlock="8" fontWeight="bold">After completing three core quarters every student must select one specialization</Text>
    </Stack>
    <SimpleGrid minChildWidth="96" gap={2} id="special">
      {data.map((d, i) => {
        return (
          <GridItem
            margin={4}
            marginTop="10"
            key={i}
            height="auto"
            boxShadow="dark-lg"
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

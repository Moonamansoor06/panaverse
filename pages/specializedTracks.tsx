"use-client";
import {
  SimpleGrid,
  Heading,
  Text,
  Grid,
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

export default function CoreCourse() {
  const { data }: SpecialData = spData;
  return (
    <SimpleGrid minChildWidth="96" gap={2}>
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
  );
}

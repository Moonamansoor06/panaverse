import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Spacer,
} from "@chakra-ui/react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export default function Nav() {
  return (
    <div>
      <Flex direction="row" bgGradient="linear(to-r, green.200, blue.500)">
        <Image src="/logo.png" alt="" boxSize={[10, 10, 20]} />
        <Spacer />
        <Breadcrumb
          paddingTop="5"
          paddingRight="1"
          fontWeight={["small", "small", "medium"]}
          fontSize={["x-small", "x-small", "medium"]}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/courses">Courses</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/coreCourses ">Core Tracks</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/specializedTracks ">
              Specialized Tracks
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
    </div>
  );
}

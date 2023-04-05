import {
  CardFooter,
  Button,
  Box,
  Heading,
  Text,
  Card,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import ImgRotator from "./imgRotator";
import RouteButton from "./routeButton";
//  import { useRouter } from 'next/navigation';
export default function HomeComponent() {
  //const router=useRouter()
  return (
    <Box id="home" marginTop="20" marginBottom="24" height={{ base: "100%",sm:"100%",md:"full", lg: "full" }} width="100%" >
      <Flex height="100%" alignItems="center" justifyContent="center" direction={{ base: "column",sm:"column",md:"row", lg: "row" }}>
        <Card m="8" p="2" w={{ lg: "50%", md:'50%', sm: "100%" }}>
          <Heading size="lg" p="2">
            Program of Studies
          </Heading>
          <Text size="lg" py="2" lineHeight="8" padding="2">
            This curriculum is intended for beginners who want to learn software
            development from the ground up. The first two quarters are shared by
            all specialities and are dedicated to studying Object-Oriented
            Programming and cutting-edge Full-Stack Web 2.0 development. It is
            going to be a year-long hybrid programme that includes both onsite
            and online classes and is divided into four quarters of 13 weeks
            each. The emphasis will be on hands-on learning by educating
            students to produce projects. To accommodate everyone, courses will
            be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on
            weekdays. It employs a hybrid teaching format, with core onsite
            classes complemented by online Zoom laboratories and recorded
            videos.
          </Text>
          <CardFooter display="flex" alignItems="right" justifyContent="right">
            <RouteButton
              buttonName="Admissiom website"
              url="https://www.piaic.org/"
            />
          </CardFooter>
        </Card>
        <Spacer />
        <Card p="2" pt="4" w={{ lg: "50%", md:'50%',sm: "100%" }}>
          <ImgRotator />
        </Card>
      </Flex>
    </Box>
  );
}

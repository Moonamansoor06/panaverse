import {
  CardFooter,
  Button,
  SimpleGrid,
  GridItem,
  Stack,
  Box,
  Heading,
  Text,

} from "@chakra-ui/react";
import ImgRotator from "./imgRotator";
import RouteButton from "./routeButton";
//  import { useRouter } from 'next/navigation';
export default function HomeComponent() {
  //const router=useRouter()
  return (
    <Box id="home" marginTop={["2","2","20","20"]} marginBottom={["2","40","60"]} 
    height="auto" paddingTop={["2","40","40"]} 
    width={{ base: "100%",sm:"100%",md:"100%", lg: "100%" }} >
      <SimpleGrid minChildWidth={["64","72","container.sm"]}    gap="6" id="special" >
        <GridItem  >
          <Heading size="lg" p="2">
            Program of Studies
          </Heading>
          <Text size="lg" textAlign="justify" lineHeight="8" padding="2">
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
          <Stack display="flex" alignSelf="center"  maxW="40">
            <RouteButton
              buttonName="Admissiom website"
              url="https://www.piaic.org/"
            />
          </Stack>
        </GridItem>
        
        <GridItem p="2" pt="4" width="full">
          <ImgRotator />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

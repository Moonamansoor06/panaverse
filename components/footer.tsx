import { Box, Portal, Text } from "@chakra-ui/react";
import Link from "next/link";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { BsYoutube } from "react-icons/bs";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <Portal>
      <Box
        height={{ base: "100%", md: "50%", xl: "25%" }}
        width={["100%", "100%", "100%"]}
        marginTop="12"
        padding="15"
        display="flex"
        alignContent="space-between"
        justifyContent="space-between "
        bgGradient="linear(to-r, green.200, blue.500)"
      >
        <Text>@panaverse.co</Text>
        <nav
          style={{
            padding: "8",
            width: "30%",
            display: "flex",
            flexDirection: "row",
            alignContent: "space-evenly",
            justifyContent: "space-evenly",
          }}
        >
          <Link href="https://www.facebook.com/groups/panaverse">
            {" "}
            <TiSocialFacebook />
          </Link>
          <Link href="https://twitter.com/Panaverse_edu">
            {" "}
            <TiSocialTwitter />
          </Link>
          <Link href="https://www.youtube.com/@panaverse/streams">
            {" "}
            <BsYoutube />
          </Link>
          <Link href="https://github.com/panaverse">
            {" "}
            <SiGithub />
          </Link>
        </nav>
      </Box>
    </Portal>
  );
}

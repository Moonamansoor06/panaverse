"use-client";
import {
  Card,
  Heading,
  Text,
  Box,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  Divider,
  List,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";

export default function SpecializedTrack() {
  return (
    <Box
    height={{ base: "100%", md: "50%", xl: "25%" }}
    width={["100%","100%","100%"]}
    display="flex"
    flexDirection="column"
    padding="2"
    marginTop="8"
    >
      <Tabs variant="enclosed" colorScheme="green">
        <TabList>
          <Tab>Quarter 3</Tab>
          <Tab>Quarter 4</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Card w="100%" variant="filled" fill="blue.50">
              <CardHeader
                w="100%"
                h="4"
                bgGradient="linear(to-b, blue.300, blue.600,blue.700)"
              ></CardHeader>

              <CardBody>
                <Stack>
                  <Heading size="lg">
                    Web 3 and Metaverse Specialization
                  </Heading>
                  <Heading size="md">
                    Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Duration: 13 Weeks
                  </Text>
                  <Heading size="sm">Course Description:</Heading>
                  <Text pt="2" fontSize="md">
                    In this course you will learn how to develop Web 3.0 DApps,
                    create a project, deploy it in production, write smart
                    contracts, unit test them, and create user interfaces for
                    them. We will also learn to develop ERC-20 and NFT tokens,
                    DAOs, Oracles, etc. Please note that in order to develop Web
                    3 applications you also need to build on top of Web 2.0
                    technologies which we have already covered in the previous
                    quarters.
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db">
                      The reasons for learning Web 2 before Web 3
                    </Link>
                  </Text>
                  <Heading size="md">Course Outline:</Heading>
                  <Heading size="md">Blockchain and Metaverse Theory</Heading>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0">
                      The Metaverse: And How It Will Revolutionize Everything by
                      Matthew Ball
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067">
                      Mastering Blockchain - Fourth Edition by Imran Bashir
                    </Link>
                  </Text>
                  <Divider />
                  <Heading size="md">
                    Smart Contract Development in Solidity
                  </Heading>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181">
                      Solidity Programming Essentials - Second Edition By Ritesh
                      Modi
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://github.com/panaverse/defi-dapps-solidity-smart-contracts">
                      Solidity Learning Repo
                    </Link>
                  </Text>
                  <Heading size="md">
                    Dapp Development using Ethers.js and Next.js 13
                  </Heading>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://github.com/panaverse/dapps-nextjs">
                      Dapp Learning Repo
                    </Link>
                  </Text>
                  <Heading size="md">Tokennomics</Heading>
                  <Heading size="sm">
                    Blockchain Project: Create a Token and Launch ICO/IEO/IDO
                  </Heading>
                  <Text pt="2" fontSize="md">
                    As you probably know, the ICO (“Initial Coin Offering”)
                    industry has been booming, and it’s completely reinventing
                    the way new startups kickstart themselves. In fact, have a
                    look at Wikipedia’s list of highest crowdfunding projects
                    https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects,
                    and you’ll notice that blockchain projects absolutely
                    dominate the list.
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://phemex.com/blogs/what-is-a-dex-ido">
                      Understand the difference between IDO vs. IEO vs. ICO
                    </Link>
                  </Text>
                  <Heading size="sm">
                    Also check these links for latest listings:
                  </Heading>
                  <UnorderedList listStyleType='none'
                    p="4"
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <ListItem>
                      <Link href="https://icodrops.com">
                        ICO list at ICO Drops
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="https://topicolist.com/">
                        ICO List of Best New Initial Coin Offerings
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="https://cryptototem.com/ico-list/">
                        Top-Rated Crypto Token Sales: List of New ICOs, STOs,
                        IEOs and IDOsTop-Rated Crypto Token Sales: List of New
                        ICOs, STOs, IEOs and IDOs
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="https://polkastarter.com">Polkastarter</Link>
                    </ListItem>

                    <ListItem>
                      <Link href="https://www.icolistingonline.com">
                        ICO List Online{" "}
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="https://coincodex.com/ieo-list/binance/">
                        Binance IEO List{" "}
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="https://www.coinspeaker.com/ieo/platform/binance-launchpad/">
                        Binance Launchpad{" "}
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="https://icomarks.com/ieo"></Link>IEO List{" "}
                    </ListItem>
                  </UnorderedList>
                  <Divider />
                  <Heading size="md">
                    Project Part 1: How to Launch a IEO on Binance Launchpad
                  </Heading>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://appinventiv.com/blog/how-to-launch-an-ieo/">
                      Read How to Launch an IEO
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04">
                      Your first task of the project is to make a google slides
                      presentation on how to start a IEO on the Binance Launch
                      Pad
                    </Link>
                  </Text>
                  <Heading size="sm">
                    Note: Also document the alternatives to Binance Launchpad.
                  </Heading>

                  <Heading size="md">
                    Project Part 2: How to Launch a IDO on Polkastarter
                  </Heading>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://cryptorank.io/fundraising-platforms">
                      Review the list of top fundraising platforms
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href=" https://polkastarter.com/">
                      Your second task of the project is to make a google slides
                      presentation on how to start a IDO on the Polkastarter
                    </Link>
                  </Text>
                  <Heading size="md">
                    Project Part 3: Create a Pako Token
                  </Heading>
                  <UnorderedList listStyleType='none'>
                    <ListItem>
                      By creating a token and related contracts, you’ll also
                      learn how to handle money sent to your contracts, which
                      should come in handy if you want to create some kind of
                      paid decentralized service in the future.
                    </ListItem>
                    <ListItem>
                      Therefore, for the sake of this chapter, let’s imagine
                      that our Pako DApp uses its own coin – the Pako Token. We
                      will create two contracts – one for the token itself and
                      one for the token crowd sale (the ICO).
                    </ListItem>
                    <ListItem>
                      Now Create your own Pako ERC20 Token and deploy it on a
                      testnet. The Token should be to use OpenZeppelin
                      contracts. You will use the Hardhat development
                      environment. Also, write at least twenty automated tests.
                      We will be using Solidity and Typescript for development.
                    </ListItem>
                  </UnorderedList>
                  <Divider />
                  <Heading size="md">
                    Project Part 4: Develop Crowd Sale Contract
                  </Heading>
                  <UnorderedList listStyleType='none'>
                    <ListItem>
                      This contract will be responsible for allowing users to
                      exchange ETH for our Pako Token. In order to do that we
                      need to set a price for our token (1 ETH = 100 Pako Token)
                    </ListItem>
                    <ListItem>
                      Implement a payable buyToken() function.
                    </ListItem>
                    <ListItem>
                      Emit a BuyTokens event that will log who’s the buyer, the
                      amount of ETH sent and the amount of Token bought
                    </ListItem>
                    <ListItem>
                      Transfer 75% of the Tokens to the Crowd Sale contract at
                      deployment time. i.e. Right after the contract is
                      deployed, we want the token contract to send 75% of our
                      token supply to it. While 25% remain in our personal
                      “owner” account.
                    </ListItem>
                    <ListItem>
                      Transfer the ownership of the Crowd Sale contract (at
                      deploy time) to our frontend address so that we are able
                      to withdraw the ETH.
                    </ListItem>
                    <ListItem
                      p="2"
                      color="gray"
                      textDecoration="underline"
                      fontSize="md"
                    >
                      
                      https://docs.openzeppelin.com/contracts/4.x/crowdsales
                      however you will have to update the code to the latest
                      solidity version.
                      <Link href="">
                        You can use the openzeppelin crowd sale contracts
                      </Link>
                    </ListItem>
                    <ListItem>
                      Also write extensive tests, for example we will simply
                      send a transaction of 1 ETH from a random account to the
                      contract. After the transaction, we should expect the
                      account to have received Pako, while the contract’s
                      balance should have been reduced.
                    </ListItem>
                  </UnorderedList>
                  <Heading size="md">
                    Project Part 5: Trying it with MetaMask
                  </Heading>
                  <UnorderedList listStyleType='none'>
                    <ListItem>
                      While it’s always good to test your code, it’s often more
                      satisfying to see the results of your work wrapped in a
                      nice UI. Let’s see how we can deploy our contracts and get
                      some Pako tokens into our MetaMask wallet!{" "}
                    </ListItem>
                    <ListItem>
                      We start by running our deployment scripts for the test
                      network so that the new token contracts are uploaded and
                      deployed.
                    </ListItem>
                    <ListItem>
                      When it’s done, take note of what addresses the contracts
                      were uploaded to and copy it!
                    </ListItem>
                    <ListItem>
                      Now head to MetaMask, and send a transaction of 1 ETH to
                      the crowd sale contract address. If your MetaMask wallet
                      doesn’t have any ethers, remember that you can use any
                      faucet.
                    </ListItem>
                    <ListItem>
                      After the transaction has been confirmed, you might be
                      confused about why you can’t see any tokens in your
                      wallet. It turns out that you need to manually add the
                      token address in MetaMask in order to “register” it –
                      after all, there are so many tokens out there, there’s no
                      way MetaMask could list them all by default!
                    </ListItem>
                    <ListItem>
                      To do this, open the side menu and click on the “Add
                      token” button to get started:
                    </ListItem>
                    <ListItem>
                      Once you’re on the token page, click on “Add custom token”
                      and paste in the token contract’s address in the address
                      field.
                    </ListItem>
                    <ListItem>
                      After confirming that you want to add the token, you
                      should be able to see your Pako balance right next to your
                      ETH balance in the wallet. How cool!
                    </ListItem>
                  </UnorderedList>
                  <Divider />
                  <Heading size="md">
                    Project Part 6: Trying it with Multisignature Wallets
                  </Heading>
                  <UnorderedList listStyleType='none'>
                    <ListItem>
                      Read
                      https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/
                    </ListItem>
                    <ListItem>
                      Now use Gnosis Safe https://gnosis-safe.io/ with
                      multi-sigs to do what you did in the last part.
                    </ListItem>
                  </UnorderedList >
                  <Heading size="md">
                    Project Part 7: Sending Tokens using Ethers.js
                  </Heading>
                  <UnorderedList listStyleType='none'>
                    <ListItem>
                      Write a Typescript program to send Pako Token to some
                      friend’s address using Ethers.js.
                    </ListItem>
                    <ListItem>
                      You may follow this tutorial
                      https://ethereum.org/en/developers/tutorials/send-token-etherjs/
                    </ListItem>
                  </UnorderedList >
                  <Heading size="md">
                    Project Part 8 Advance: Create, Deploy, Mint, and Sell a NFT
                  </Heading>
                  <UnorderedList listStyleType='none'>
                    <ListItem>
                      Read this NFT tutorial series
                      https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/
                    </ListItem>
                    <ListItem>
                      Create a NFT contract using the OpenZepplen ERC721 NFT
                      Standard
                      https://docs.openzeppelin.com/contracts/4.x/erc721
                    </ListItem>
                    <ListItem>
                      You may use the Preset ERC721 contract
                      https://docs.openzeppelin.com/contracts/4.x/erc721#Presets
                    </ListItem>
                    <ListItem>
                      Deploy your NFT contract on a testnet, mint it, and view
                      it on the MetaMask wallet and list it on OpenSea
                      Marketplace https://opensea.io/ for sale.
                    </ListItem>
                    <ListItem>
                      Implement a ERC721 Market
                      https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/
                    </ListItem>
                  </UnorderedList>
                </Stack>
              </CardBody>
            </Card>
          </TabPanel>
          <TabPanel>
            <Card w="100%" variant="filled" fill="blue.50">
              <CardHeader
                w="100%"
                h="4"
                bgGradient="linear(to-b, blue.300, blue.600,blue.700)"
              ></CardHeader>
              <CardBody>
                <Stack>
                  <Heading size="md">
                    Developing Planet-Scale Open Virtual and Augmented Metaverse
                    Experiences
                  </Heading>
                  <Text pt="2" size="md">
                    Duration: 13 Weeks
                  </Text>
                  <Heading size="md">Course Description :</Heading>

                  <Text pt="2" size="md">
                    The Web is the Metaverse. The metaverse requires an
                    infrastructure that connects all of the metaverses so that
                    we can travel between them. This is only achievable with
                    open web-based metaverses. The internet and its browsers are
                    magical. Federated but linked experiences connect pages,
                    people, technology, businesses, standards, and nations. It’s
                    unlike anything else. The metaverse should replicate the
                    best qualities of the web - it should just be the web. We
                    just have to extend online responsive design from mobile to
                    desktop to 3D, Augmented Reality, and Virtual Reality. This
                    course will teach you how to build the Open Social Spatial
                    Web with WebXR and WebGPU technologies.
                  </Text>
                  <Heading m="2" size="md">
                    Course Outline
                  </Heading>
                  <Heading size="sm">Open Metaverse Web Development</Heading>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://github.com/panaverse/metaverse-web">
                      Open Metaverse Learning Repo
                    </Link>
                  </Text>

                  <Heading size="sm">
                    Blender 3D asset Creation for the Metaverse (Remote Zoom
                    Class)om Class
                  </Heading>

                  <Text pt="2" size="md">
                    Blender development is being funded by heavyweights in the
                    real-time 3D (RT3D) space such as Apple, Unity, AMD, Intel,
                    Meta, NVIDIA, AWS, Epic Games, Adobe, Microsoft, and
                    Decentraland. It is expected to become the standard asset
                    creation tool for metaverse.
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.blender.org/download/">
                      Blender 3+ Download
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD">
                      Blender 3.0 Beginner Tutorial
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit">
                      Blender 3.0 Hotkey
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">
                      Blender Projects Textbook: Blender by Example 2nd Edition
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5">
                      Blender Textbook: The Complete Guide to Blender Graphics:
                      Computer Modeling & Animation 7th Edition by John M. Blain
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.youtube.com/watch?v=H7T0SzdFHwg">
                      Best Hardware Performance for Blender Rendering
                    </Link>
                  </Text>

                  <Heading size="md">Assignment 1:</Heading>
                  <UnorderedList listStyleType='none'>
                    <ListItem>
                      Build a 3D Donut using Blender 3 as shown in these video
                      tutorials
                      https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD
                    </ListItem>
                  </UnorderedList>
                  <Heading size="md">Assignment 2:</Heading>
                  <UnorderedList listStyleType='none'>
                    <ListItem>
                      Build a Viking Scene using Blender 3 as shown in chapter 2
                      of the Book [Blender by Example 2nd Edition
                      https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
                    </ListItem>
                  </UnorderedList>
                  <Heading size="md">Assignment 3:</Heading>
                  <UnorderedList listStyleType='none'>
                    <ListItem>
                      Modeling a Time Machine using Blender 3 as shown in
                      chapters 3 and 4 of the Book Blender by Example 2nd
                      Edition
                      https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
                    </ListItem>
                  </UnorderedList>
                  <Heading size="md">Assignment 4:</Heading>
                  <UnorderedList listStyleType='none'>
                    <ListItem>
                      Build a Modern Kitchen using Blender 3 as shown in
                      chapters 5, 6, and 7 of the Book Blender by Example 2nd
                      Edition
                      https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
                    </ListItem>
                  </UnorderedList>
                  <Heading size="md">Assignment 5:</Heading>
                  <UnorderedList listStyleType='none'>
                    <ListItem>
                      Illustrating an Alien Hero with Grease Pencil as shown in
                      chapter 8 of the Book Blender by Example 2nd Edition
                      https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
                    </ListItem>
                  </UnorderedList>
                  <Heading size="md">Assignment 6:</Heading>
                  <UnorderedList listStyleType='none'>
                    <ListItem>
                      Build a 3D Sword in the Stone using Blender 3 as shown in
                      these video tutorials
                      https://www.youtube.com/watch?v=bpvh-9H8S1g
                    </ListItem>
                  </UnorderedList>
                  <Divider />
                </Stack>
              </CardBody>
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

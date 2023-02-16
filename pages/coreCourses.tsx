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
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  ListItem,
  OrderedList,

} from "@chakra-ui/react";
import Link from "next/link";
//import { useRouter } from "next/navigation";

export default function DetailedCourse() {
  return (
    <Box
      height={{ base: "100%", md: "50%", xl: "25%" }}
      width={["100%","100%","100%"]}
      display="flex"
      flexDirection="column"
      padding="2"
      marginTop="8"
     
    >
      <Tabs variant='enclosed' colorScheme="green">
        <TabList>
          <Tab>Quarter 1</Tab>
          <Tab>Quarter 2</Tab>
       
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
                <Stack >
                  <Heading size="md">
                    Object-Oriented Programming using TypeScript
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Duration: 13 Weeks
                  </Text>
                  <Heading  size="sm">
                    Course Description:
                  </Heading>
                  <Text pt="2" fontSize="md">
                    We will start the program by learning the fundamentals of
                    Object-Oriented programming using JavaScript and TypeScript.
                    We will also understand the latest Web trends i.e. Web 3.0
                    and Metaverse concepts and try to understand their working
                    from the perspective of the users.
                  </Text>
                  <Heading size="md">Homework and Quizes</Heading>
                  <Text pt="2" fontSize="sm">
                    HTML and CSS (Homework)
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6">
                      Learn HTML by Hira Khan (Watch Recorded Videos)
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob">
                      Learn CSS Intro by Hira Khan (Watch Recorded Videos)
                    </Link>
                  </Text>
                  <Divider />
                  <Heading size="md">Web 3.0 and Metaverse Theory</Heading>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    Complete Web 3 Assignments included in the Web 3 User Guide
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit">
                      Introduction to Panaverse DAO
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit">
                      Web 3.0 User Guide
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit">
                      Virtual and Augmented Metaverse User Guide
                    </Link>
                  </Text>
                  <Divider />
                  <Heading size="md">
                    Fundamentals of JavaScript (ECMAScript 2022 Language
                    Specification)(Core)
                  </Heading>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo">
                      Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4">
                      Chapters 2-6, 13 of JavaScript from Beginner to
                      Professional: Learn JavaScript quickly by building fun,
                      interactive, and dynamic web apps, games, and pages
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional">
                      JavaScript Book Code
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md">
                      Getting Started Exercises with JavaScript and Node.js
                    </Link>
                  </Text>
                  <Heading size="md">Topics Covered in the Quiz:</Heading>
                  <Heading size="xs">
                    Background of JavaScript and How to use JavaScript in
                    Browser Variables, Primitive data types Analyzing and
                    modifying data types, and Operators (Chapter 2 of JavaScript
                    from Beginner to Professional)
                  </Heading>
                  <OrderedList>
                    <ListItem>
                      Intro to Node.js, .mjs files, Modules, NPM, import,
                      export, and using external modules with npm:
                      https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing
                    </ListItem>
                    <ListItem>
                      How to accept user input in your Node.js JavaScript
                      programs, this will allow us to create interactive Node.js
                      console programs using prompt-sync library. The last
                      example in this presentation shows you how to use
                      prompt-sync library in your Node.js programs:
                      https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing
                      Note: After this point, we will do all our class work and
                      exercises using Node.js in .mjs files. We will also be
                      able to develop interactive Node.js console programs which
                      will greatly help the students to learn.
                    </ListItem>
                    <ListItem>
                      Using Arrays and Objects in Node.js Programs (chapter 3 of
                      JavaScript from Beginner to Professional)
                    </ListItem>
                    <ListItem>
                      Using if and if else statements, else if statements,
                      Conditional ternary operators, and switch statements in
                      Node.js programs (chapter 4 of JavaScript from Beginner to
                      Professional)
                    </ListItem>
                    <ListItem>
                      Using while loop, do while loop, for loop, for in, and for
                      of loop in Node.js (chapter 5 of JavaScript from Beginner
                      to Professional)
                    </ListItem>
                    <ListItem>
                      Using Basic functions, Function arguments, Return,
                      Variable scope in functions, Recursive functions, Nested
                      functions, Anonymous functions, and Function callbacks in
                      Node.js (chapter 6 of JavaScript from Beginner to
                      Professional)
                    </ListItem>
                    <ListItem>
                      Using Concurrency, Callbacks, Promises, async / await, and
                      Event loop (chapter 13 of JavaScript from Beginner to
                      Professional)
                    </ListItem>
                    <ListItem>
                      JavaScript promises, mastering the asynchronous
                      https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript
                    </ListItem>
                    <ListItem>
                      New JavaScript Features in ECMAScript 2022 and 2021
                      https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg
                    </ListItem>
                  </OrderedList>
                  <Divider />
                  <Heading size="md">
                    Object-Oriented Programming with TypeScript
                  </Heading>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1">
                      Chapters 1-11 of Learning TypeScript: Enhance Your Web
                      Development Skills Using Type-Safe JavaScript{" "}
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://github.com/panaverse/learn-typescript">
                      Learning Repository
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.learningtypescript.com/">
                      In Class Companion projects and articles for Learning
                      TypeScript{" "}
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://github.com/panaverse/typescript-node-projects">
                      Homework Project
                    </Link>
                  </Text>
                  <Heading size="md">TypeScript for React</Heading>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://profy.dev/article/react-typescript">
                      Minimal TypeScript Crash Course For React With Interactive
                      Code Exercises
                    </Link>
                  </Text>
                  <Heading size="md">TypeScript Quizzes</Heading>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    Fundamentals of TypeScript Quiz
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    {" "}
                    TypeScript Professional Proficiency Quiz
                  </Text>
                  <Divider />
                  <Heading size="md">
                   Fundamentals of Version Control with Git
                  </Heading>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF">
                      Version Control using Git and GitHub By Sir Zeeshan Hanif
                      (Watch Recorded Videos)
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    {" "}
                    Chapters 1, 2, 3, and 4 Learn Version Control with Git: A
                    step-by-step course for the complete beginner by Tobias
                    Günther We
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    will also cover these readings:
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://help.github.com/articles/markdown-basics/">
                      Markdown Basics{" "}
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github">
                      Difference between for nad branch on github
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences">
                      Git branch,fork, clone,rebase difference
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://git-scm.com/book/en/v2/Git-Branching-Rebasing">
                      Git Branching Rebasing
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches">
                      Remote Branches
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://try.github.io/levels/1/challenges/1">
                      For Practice
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.datacamp.com/courses/introduction-to-git-for-data-science">
                      Homework
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html"></Link>{" "}
                    Git Cheatsheet
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    Git Quiz before the start of Quarter 2 Total Questions: 60,
                    Total Time: 75 minutes
                  </Text>{" "}
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
                    Developing Planet-Scale Web 2.0 Serverless Cloud Apps and
                    APIs using Next.js 13 and Cloud Development Kit (CDK) for
                    Terraform
                  </Heading>
                  <Text pt="2" size="md">
                    Duration: 13 Weeks
                  </Text>
                  <Heading size='md'>Course Description :</Heading>

                  <Text pt="2" size="md">
                    The objective of this course is to teach participants to
                    develop customer-facing planet-scale Websites, Full-Stack
                    Apps and templates, Dashboards, and Muti-Cloud Serverless
                    APIs. By the end of the quarter, the participants will be
                    able to develop and deploy web platforms like Facebook,
                    Shopify, etc. The technologies covered in this course will
                    include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC,
                    QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL
                    Compatible), AWS Serverless Technologies, and Cloud
                    Development Kit for Terraform (CDKTF).
                  </Text>
                  <Heading m='2' size="md">Course Outline</Heading>
                  <Heading size="sm">
                    Next.js 13 Web Development
                  </Heading>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://beta.nextjs.org/docs">
                      Next 13 Official Documentation
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://beta.reactjs.org/learn">
                      Latest Learn React Official Website
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://github.com/panaverse/learn-nextjs">
                      Learn Next.js 13 Learning Repo
                    </Link>
                  </Text>
                  <Heading size="sm">
                    Next.js 13 using Chakra UI (Remote Zoom Class)
                  </Heading>

                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://chakra-ui.com/getting-started">
                      Chakra UI Docs
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.freecodecamp.org/news/css-flexbox-complete-guide/">
                      CSS Flexbox Explained – Complete Guide to Flexible
                      Containers and Flex Items
                    </Link>
                  </Text>
                  <Heading size="sm">
                    UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote
                    Zoom Class)
                  </Heading>

                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa">
                      Designing and Prototyping Interfaces with Figma: Learn
                      essential UX/UI design principles by creating interactive
                      prototypes for mobile, tablet, and desktop by Fabio
                      Staiano
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.figma.com/community/file/768809027799962739">
                      Figma Design Kit for TailwindCSS
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.figma.com/community/file/971408767069651759">
                      Chakra UI Figma Kit
                    </Link>
                  </Text>
                  <Heading size="sm">
                    API Routes with Next.js
                  </Heading>

                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://nextjs.org/docs/api-routes/introduction">
                      API Routes
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/">
                      Build a tRPC CRUD API Example with Next.js
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/">
                      Stop building REST APIs for your Next.js apps, use tRPC
                      instead
                    </Link>
                  </Text>
                  <Heading size="sm">
                    SQL and Prisma
                  </Heading>

                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres">
                      Start from scratch with relational databases
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.youtube.com/watch?v=5hzZtqCNQKk">
                      SQL For Beginners Video Tutorial
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.freecodecamp.org/news/dbms-and-sql-basics/">
                      Database Management Systems and SQL – Tutorial for
                      Beginners
                    </Link>
                  </Text>
                  <Heading size="sm">
                    Next.js 13 using TailwindCSS (Remote Zoom Class)
                  </Heading>

                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/">
                      Modern CSS with Tailwind, Second Edition by Noel Rappin
                    </Link>
                  </Text>
                  <Heading size="sm">
                    AWS Application Composer (Remote Zoom Class)
                  </Heading>

                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.youtube.com/watch?v=BujE_tik5r8">
                      What is AWS Application Composer?
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.youtube.com/watch?v=p411uh363jQ">
                      Event-driven apps with AWS Application Composer
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://aws.amazon.com/application-composer/">
                      Visually design and build serverless applications quickly
                    </Link>
                  </Text>

                  <Text pt="2" fontSize="md">
                    Must Have: Create Free AWS Account
                  </Text>

                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.youtube.com/watch?v=BujE_tik5r8">
                      What is AWS Application Composer?
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all">
                      AWS Free Tier
                    </Link>
                  </Text>
                  <Text pt="2">
                    Note: For AWS Free Tier you will need a credit or debit
                    card. The easiest way for Pakistani students is to open a
                    bank account with Meezan Bank. Open a Meezan Aasan Account
                    if you have no earning proof. Meezan Bank will charge Rs.
                    1100 for ATM Debit Card and there is a requirement of Rs.
                    100 minimum deposit. The card will be delivered in a few
                    weeks. Our students have reported that this Debit card works
                    with AWS. Now you can create a virtual VISA Debit card
                    through the NayaPay app (https://www.nayapay.com/ ) which
                    can be used to create AWS/GCP/Azure accounts. This is good
                    news for those students who find it difficult to create
                    physical debit and credit cards from banks. You can also get
                    a $300 credit
                    https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html
                  </Text>

                  <Heading size="sm">
                    Multi-Cloud GraphQL Serverless API Development with Cloud
                    Development Kit for Terraform (CDKTF) (Remote Zoom Class)
                  </Heading>

                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://github.com/panaverse/learn-multicloud-api-development">
                      Learn Multicloud Serverless API Development using CDK
                      Terraform in Baby Steps
                    </Link>
                  </Text>
                  <Heading size="sm">Web 2.0 Projects</Heading>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://github.com/panaverse/nextjs-projects">
                      Next.js Projects
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://github.com/panaverse/styling-nextjs-projects">
                      Styling Next.js Projects using TailwindCSS and Chakra UI
                    </Link>
                  </Text>

                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://github.com/ogzhanolguncu/min-todo">
                      Todo Fullstack App
                    </Link>
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://www.youtube.com/watch?v=nzJsYJPCc80">
                      Build a Twitter Clone
                    </Link>
                  </Text>

                  <Heading size="sm">
                    Earn While You Learn Projects
                  </Heading>
                  <Text pt="2" fontSize="md">
                    Build Full-Stack Next.js 13 Jamstack Templates
                  </Text>
                  <Text pt="2">
                    You will be assigned to build a template which we will sell
                    on Theme Forest and Panaverse DAO marketplace. The Panaverse
                    DAO will receive 25% share on the sale of the template which
                    will be used to manage the platform. An additional 15% will
                    be spent on marketing the template. 60% of the revenues will
                    be distributed to the developer through the Panaverse DAO in
                    the form of Panaverse tokens.
                  </Text>
                  <Text
                    pt="2"
                    color="gray"
                    textDecoration="underline"
                    fontSize="md"
                  >
                    <Link href="https://github.com/panaverse/panaverse-template-standard">
                      The Panaverse Full-Stack Template Standard
                    </Link>
                  </Text>
                 
                  <Heading size="sm">
                      Build QraphQL APIs
                    </Heading>
            
                  <Text pt="2">
                    You will be assigned to build APIs for which you will sell
                    subscriptions on the Panaverse DAO Marketplace. The
                    Panaverse DAO will receive 25% share on the sale of the
                    template which will be used to manage the platform. An
                    additional 15% will be spent on marketing the template. 60%
                    of the revenues will be distributed to the developer through
                    the Panaverse DAO in the form of Panaverse tokens.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </TabPanel>
 </TabPanels>
      </Tabs>
    </Box>
  );
}

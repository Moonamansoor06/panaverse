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
  CardFooter,
  Button,
} from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function detailedCourse() {
   return (
    <Box
      height={{ base: "100%", md: "50%", xl: "25%" }}
      width={["95%"]}
      display="flex"
      flexDirection="column"
      padding="2"
      margin="8"
      borderWidth="1px"
      borderRadius="lg"
      borderColor="lightgray"
      borderTopWidth="10px"
      borderTopColor="black"
    >
      <Card>
        <CardHeader>
          <Heading size="lg">Detailed Course Syllabus</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="lg">Quarter I (Core)</Heading>
              <Heading size="md" >
                CS-101: Object-Oriented Programming using TypeScript
              </Heading>
              <Text pt="2" fontSize="sm">
                Duration: 13 Weeks
              </Text>
              <Text pt="2" fontSize="md">
                Course Description:
              </Text>
              <Text pt="2" fontSize="md">
                We will start the program by learning the fundamentals of
                Object-Oriented programming using JavaScript and TypeScript. We
                will also understand the latest Web trends i.e. Web 3.0 and
                Metaverse concepts and try to understand their working from the
                perspective of the users.
              </Text>
              <Heading size="md">Homework and Quizes</Heading>
              <Text pt="2" fontSize="sm">
                HTML and CSS (Homework)
              </Text>
              <Text
                pt="2"
                color="gray"
                textDecoration="underline"
                fontSize="lg"
              >
                <Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6">
                  Learn HTML by Hira Khan (Watch Recorded Videos)
                </Link>
              </Text>
              <Text
                pt="2"
                color="gray"
                textDecoration="underline"
                fontSize="lg"
              >
                <Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob">
                  Learn CSS Intro by Hira Khan (Watch Recorded Videos)
                </Link>
              </Text>
              <Heading size="md">Web 3.0 and Metaverse Theory</Heading>
              <Text
                pt="2"
                color="gray"
                textDecoration="underline"
                fontSize="lg"
              >
                Complete Web 3 Assignments included in the Web 3 User Guide
              </Text>
              <Text
                pt="2"
                color="gray"
                textDecoration="underline"
                fontSize="lg"
              >
                <Link href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit">
                  Introduction to Panaverse DAO
                </Link>
              </Text>
              <Text
                pt="2"
                color="gray"
                textDecoration="underline"
                fontSize="lg"
              >
                <Link href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit">
                  Web 3.0 User Guide
                </Link>
              </Text>
              <Text
                pt="2"
                color="gray"
                textDecoration="underline"
                fontSize="lg"
              >
                <Link href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit">
                  Virtual and Augmented Metaverse User Guide
                </Link>
              </Text>
              <Heading size="md">
                Fundamentals of JavaScript (ECMAScript 2022 Language
                Specification)(Core)
              </Heading>
              <Text
                pt="2"
                color="gray"
                textDecoration="underline"
                fontSize="lg"
              >
                <Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo">
                  Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)
                </Link>
              </Text>
              <Text
                pt="2"
                color="gray"
                textDecoration="underline"
                fontSize="lg"
              >
                <Link href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4">
                  Chapters 2-6, 13 of JavaScript from Beginner to Professional:
                  Learn JavaScript quickly by building fun, interactive, and
                  dynamic web apps, games, and pages
                </Link>
              </Text>
              <Text
                pt="2"
                color="gray"
                textDecoration="underline"
                fontSize="lg"
              >
                <Link href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional">
                  JavaScript Book Code
                </Link>
              </Text>
              <Text
                pt="2"
                color="gray"
                textDecoration="underline"
                fontSize="lg"
              >
                <Link href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md">
                  Getting Started Exercises with JavaScript and Node.js
                </Link>
              </Text>
              <Heading size="md">Topics Covered in the Quiz:</Heading>
              <Heading size="xs" >
                Background of JavaScript and How to use JavaScript in Browser
                Variables, Primitive data types Analyzing and modifying data
                types, and Operators (Chapter 2 of JavaScript from Beginner to
                Professional)
              </Heading>
              <OrderedList>
                <ListItem>
                  Intro to Node.js, .mjs files, Modules, NPM, import, export,
                  and using external modules with npm:
                  https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing
                  How to accept user input in your Node.js JavaScript programs,
                  this will allow us to create interactive Node.js console
                  programs using prompt-sync library. The last example in this
                  presentation shows you how to use prompt-sync library in your
                  Node.js programs:
                  https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing
                  Note: After this point, we will do all our class work and
                  exercises using Node.js in .mjs files. We will also be able to
                  develop interactive Node.js console programs which will
                  greatly help the students to learn.
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
                  Using while loop, do while loop, for loop, for in, and for of
                  loop in Node.js (chapter 5 of JavaScript from Beginner to
                  Professional)
                </ListItem>
                <ListItem>
                  Using Basic functions, Function arguments, Return, Variable
                  scope in functions, Recursive functions, Nested functions,
                  Anonymous functions, and Function callbacks in Node.js
                  (chapter 6 of JavaScript from Beginner to Professional)
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
              <Heading size="md">
                Object-Oriented Programming with TypeScript
              </Heading>
              <Text
                pt="2"
                color="gray"
                textDecoration="underline"
                fontSize="lg"
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
                fontSize="lg"
              >
                <Link href="https://github.com/panaverse/learn-typescript">
                  Learning Repository
                </Link>
              </Text>
              <Text
                pt="2"
                color="gray"
                textDecoration="underline"
                fontSize="lg"
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
                fontSize="lg"
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
                fontSize="lg"
              >
                <Link href="https://profy.dev/article/react-typescript">
                  Minimal TypeScript Crash Course For React With Interactive
                  Code Exercises
                </Link>
              </Text>
              <Heading size="sm">TypeScript Quizzes</Heading>
              <Text
                pt="2"
                color="gray"
                textDecoration="underline"
                fontSize="lg"
              >
                Fundamentals of TypeScript Quiz
              </Text>
              <Text
                pt="2"
                color="gray"
                textDecoration="underline"
                fontSize="lg"
              >
                {" "}
                TypeScript Professional Proficiency Quiz
              </Text>
              <Heading size="md">
                {" "}
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
                fontSize="lg"
              >
                {" "}
                Chapters 1, 2, 3, and 4 Learn Version Control with Git: A
                step-by-step course for the complete beginner by Tobias Günther
                We
              </Text>
              <Text
                pt="2"
                color="gray"
                textDecoration="underline"
                fontSize="lg"
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
                  Git brabch,fork, clone,rebase difference
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
                fontSize="lg"
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
                <Link href="https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html">
              
                </Link>  Git Cheatsheet
              </Text>

              <Text
                pt="2"
                color="gray"
                textDecoration="underline"
                fontSize="md"
              >
                Git Quiz before the start of Quarter 2 Total Questions: 60,
                Total Time: 75 minutes
              </Text>  </Box> </Stack>
              </CardBody>
            </Card>
             </Box>
                 
           );
}

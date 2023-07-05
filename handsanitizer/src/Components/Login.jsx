import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image1 from "../assets/facebook.png";
import Image2 from "../assets/twitter.png";
import Image3 from "../assets/google.png";
import Image4 from "../assets/amazon.png";
import {useState} from 'react';
// import { FaFacebook, FaGoogle, FaTwitter, FaAmazon } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Perform login logic here
    if (email && password) {
      console.log("Login successful!");
    } else {
      console.log("Please enter email and password");
    }
    
    // Reset the form
    setEmail("");
    setPassword("");
  };
  return (
    <Box>
      <Heading as="h2" fontWeight="300" fontSize="20px" letterSpacing="-0.2px">
        Login
      </Heading>
      <Text> Please enter your e-mail and password</Text>
      <br />
      <Center>
        <Flex>
          <HStack spacing="20" >
            <button  className='Social'>
              <img src={Image1} alt="" />
            </button>
            <button className='Social'>
              <img src={Image2} alt="" />
            </button>
            <button className='Social'>
              <img src={Image3} alt="" />
            </button>
            <button className='Social'>
              <img src={Image4} alt="" />
            </button>
          </HStack>
        </Flex>
      </Center>
      <br />
      <br />
      <Center>
        <Stack spacing="4">
          <VStack as="header" spacing="6" mt="8"></VStack>
          <Card w="400px">
            <CardBody>
              <form>
                <Stack spacing="4">
                  <FormControl marginBottom="10px">
                    <Input
                      type="text"
                      placeholder="E-mail"
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      w="100%"
                      bg="white"
                      borderColor="#d8dee4"
                      size="lg"
                      padding="10px"
                      borderRadius="30px"
                      
                    />
                  </FormControl>
                  <FormControl marginBottom="10px">
                    <Input
                      type="password"
                      placeholder="Password"
                      required 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      w="100%"
                      bg="white"
                      borderColor="#d8dee4"
                      size="lg"
                      padding="10px"
                      borderRadius="30px"
                    
                    />
                  </FormControl>
                  <HStack justifyContent="end">
                    <Button
                      className="fp"
                      as="a"
                      href="#"
                      variant="link"
                      size="xs"
                      fontWeight="500"
                      fontSize="15"
                      display="flex"
                      alignItems="end"
                      color="#515151"
                    >
                      Forgot password?
                    </Button>
                  </HStack>
                  <br />
                  <Button
                    className="login"
                    bg="#161616"
                    color="white"
                    width="105%"
                    padding="10px"
                    borderRadius="30px"
                    size="lg"
                    fontSize="15"
                    onClick={handleLogin}
                    cursor='pointer'
                  >
                    Log in
                  </Button>
                </Stack>
              </form>
            </CardBody>
          </Card>
          <br />

          <Card variant="outline" borderColor="#d0d7de">
            <CardBody>
              <HStack fontSize="sm">
                <Link isExternal color="#0969da" href="#">
                  Manage subscriptions.
                </Link>
              </HStack>
            </CardBody>
          </Card>
        </Stack>
      </Center>
      <br />

      <Center as="footer" mt="16">
        <HStack spacing="4" pt="2">
          <Link
            className="fp"
            isExternal
            color="#515151"
            href="/signup"
            fontSize="xs"
          >
            Don’t have an account?
          </Link>
        </HStack>
      </Center>
   
    </Box>
   
  );
};

export default Login;

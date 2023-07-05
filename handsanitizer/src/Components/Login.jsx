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
import { FaFacebook, FaGoogle, FaTwitter, FaAmazon } from "react-icons/fa";

const Login = () => {
  return (
    <Box>
      <Heading as="h2" fontWeight="300" fontSize="20px" letterSpacing="-0.2px">
        Login
      </Heading>
      <Text> Please enter your e-mail and password</Text>
      <br />
      <Center>
        <Flex>
          <HStack gap="50px">
            <FaFacebook size="25px" />
            <FaGoogle size="25px" />
            <FaTwitter size="25px" />
            <FaAmazon size="25px" />
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
                      w="100%"
                      bg="white"
                      borderColor="#d8dee4"
                      size="lg"
                      padding="10px"
                      borderRadius="30px"
                    />
                  </FormControl>{" "}
                  <HStack justifyContent="end">
                    <Button
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
                    bg="#161616"
                    color="white"
                    width="105%"
                    padding="10px"
                    borderRadius="30px"
                    size="lg"
                    fontSize="15"
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
          <Link isExternal color="#515151" href="#" fontSize="xs">
            Don’t have an account?
          </Link>
        </HStack>
      </Center>
    </Box>
  );
};

export default Login;

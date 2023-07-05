import React from 'react';
import { Box, Heading, Text, Center, Flex, HStack, FormControl, Input, Button, Stack, VStack, Card, CardBody, Link } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const Login1 = () => {
  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('*Email is required'),
    password: Yup.string().required('*Password is required')
  });

  // Define initial form values
  const initialValues = {
    email: '',
    password: ''
  };

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    // Perform login logic here
    console.log('Login successful!', values);

    // Reset the form
    setSubmitting(false);
  };

  return (
    <Box>
      <Heading as="h2" fontWeight="300" fontSize="20px" letterSpacing="-0.2px">
        Login
      </Heading>
      <Text>Please enter your e-mail and password</Text>
      <br />
      <Center>
        <Flex>
          <HStack spacing="20">
            {/* Icons or images for social login buttons */}
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
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Stack spacing="4">
                      <FormControl marginBottom="10px">
                        <Field
                          type="text"
                          name="email"
                          placeholder="E-mail"
                          as={Input}
                          w="100%"
                          bg="white"
                          borderColor="#d8dee4"
                          size="lg"
                          padding="10px"
                          borderRadius="30px"
                        />
                        
                        <ErrorMessage name="email" component="div" color="#515151" />
                      </FormControl>
                      <FormControl marginBottom="10px">
                        <Field
                          type="password"
                          name="password"
                          placeholder="Password"
                          as={Input}
                          w="100%"
                          bg="white"
                          borderColor="#d8dee4"
                          size="lg"
                          padding="10px"
                          borderRadius="30px"
                        />
                        <ErrorMessage name="password" component="div" color="#515151" />
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
                        type="submit"
                        bg="#161616"
                        color="white"
                        width="105%"
                        padding="10px"
                        borderRadius="30px"
                        size="lg"
                        fontSize="15"
                        isLoading={isSubmitting}
                        _hover={{
                          bg: 'white',
                          color: 'black',
                         transition: 'background-color 0.3s ease-in-out'
                        }}
                      >
                        Log in
                      </Button>
                    </Stack>
                  </Form>
                )}
              </Formik>
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
          <Link className="fp" isExternal color="#515151" href="#" fontSize="xs">
            Don’t have an account?
          </Link>
        </HStack>
      </Center>
    </Box>
  );
};

export default Login1;

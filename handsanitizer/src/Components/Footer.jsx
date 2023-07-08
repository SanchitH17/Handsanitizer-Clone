import React from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  Input,
  Link,
  Icon,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";
import Image5 from "../assets/visa.png";
import Image6 from "../assets/mastercard.png";
import Image7 from "../assets/paypal.png";

const Footer = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 420px)");

  return (
    <>
      <hr />
      <Box as="footer" bg="gray.200" width={"92%"} margin={"auto"}>
        <Container maxW="container.lg">
          <Flex
            flexDirection={["column", "column", isSmallScreen ? "column" : "row"]}
            justifyContent="space-between"
            gap={'30px'}
            alignItems="center" // Aligns the items in the center horizontally
          >
            <Box>
              <Flex alignItems="center" justifyContent="center" mb={4}>
                <img
                  src="https://haanready.com/cdn/shop/files/logo-haan_2x_16964a1d-b477-4a38-a47d-4d229ac3f2e7.png?v=1614428222"
                  alt="Logo"
                  width={80}
                  height={60}
                  
                />
              </Flex>
              <Text fontSize="md" mb={4}>
                A natural personal care brand that focuses its <br /> activity
                on defining a better future for the <br /> planet and humanity.
              </Text>
            </Box>
            <Box>
              <Flex flexDirection={["column", "column", isSmallScreen ? "column" : "row"]} margin={40}>
                <Box>
                  <VStack align="start" spacing={8} mr={20}>
                    <Link href="#" color={"black"} textDecoration={"none"} _hover={{textDecor:'underline'}}>
                      Newsletter
                    </Link>
                    <Link href="#" color={"black"} textDecoration={"none"} _hover={{textDecor:'underline'}}>
                      Purpose
                    </Link>
                    <Link href="#" color={"black"} textDecoration={"none"} _hover={{textDecor:'underline'}}>
                      Stockist
                    </Link>
                    <Link href="#" color={"black"} textDecoration={"none"} _hover={{textDecor:'underline'}}>
                      Contact
                    </Link>
                    <Link href="#" color={"black"} textDecoration={"none"} _hover={{textDecor:'underline'}}>
                      Hotels
                    </Link>
                    <Link href="#" color={"black"} textDecoration={"none"} _hover={{textDecor:'underline'}}>
                      Affiliate
                    </Link>
                    <Link href="#" color={"black"} textDecoration={"none"} _hover={{textDecor:'underline'}}>
                      FAQs
                    </Link>
                  </VStack>
                </Box>
                <Box>
                  <VStack align="start" spacing={8}>
                    <Link href="#" color={"black"} textDecoration={"none"} _hover={{textDecor:'underline'}}>
                      Terms &amp; Conditions
                    </Link>
                    <Link href="#" color={"black"} textDecoration={"none"} _hover={{textDecor:'underline'}}>
                      Deliveries &amp; Returns
                    </Link>
                    <Link href="#" color={"black"} textDecoration={"none"} _hover={{textDecor:'underline'}}>
                      Refund Policy
                    </Link>
                    <Link href="#" color={"black"} textDecoration={"none"} _hover={{textDecor:'underline'}}>
                      Cookies Policy
                    </Link>
                    <Link href="#" color={"black"} textDecoration={"none"} _hover={{textDecor:'underline'}}>
                      Privacy Policy
                    </Link>
                    <Link href="#" color={"black"} textDecoration={"none"} _hover={{textDecor:'underline'}}>
                      Legal Notice
                    </Link>
                  </VStack>
                </Box>
              </Flex>
            </Box>
            <Box  width="25%" ml='-75px' mt={'-50px'}>
              <Text>Ready to stay in touch?</Text>
              <Flex alignItems="center" mb={4}>
                <Input
                  type="text"
                  placeholder="Your email"
                  width="80%"
                  margin="auto"
                />{" "}
                <EmailIcon  ml={'-35px'}/>
              </Flex>
              <Link href="#">
                <Icon as={FaInstagram} boxSize={25} margin={15} color={'black'}/>
              </Link>
              <Link href="#">
                <Icon as={FaFacebookF} boxSize={25} margin={15} color={'black'}/>
              </Link>
              <Link href="#">
                <Icon as={FaYoutube} boxSize={25} margin={15} color={'black'}/>
              </Link>
              <Link href="#">
                <Icon as={FaLinkedin} boxSize={25} margin={15} color={'black'}/>
              </Link>
            </Box>
            <Box  width="20%" mt={'-90px'}>
              <Text>Guaranteed safe checkout</Text>
              <Flex justifyContent="center" >
                <img src={Image5} alt="Visa" width={60} height={40} />
                &nbsp; &nbsp; 
                <img src={Image6} alt="Mastercard" width={60} height={40} />
                &nbsp; &nbsp; 
                <img src={Image7} alt="PayPal" width={60} height={40} />
                &nbsp; &nbsp; 
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Footer;


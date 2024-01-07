import React, { useContext, useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Flex,
  Image,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Input,
  Center,
  Text,
  Stack,
  ButtonGroup,
  IconButton
} from "@chakra-ui/react";
import India from "../assets/india.png"
import Canada from "../assets/canada.png"
import USA from "../assets/united-states.png"
import Korea from "../assets/south-korea.png"
import Mexico from "../assets/mexico.png"
import {
  faBagShopping,
  faHeart,
  
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo_han.webp";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchContext } from "../Pages/SearchContext";

function NavHeader(props) {
  const navigate = useNavigate()
  let [isMedia] = useMediaQuery("(max-width: 450px)");
  let [isLeft] = useMediaQuery("(max-width: 750px)");
  let[country, setCountry] = useState(Canada);
  let[language, setLanguage] = useState("EN");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [logged, isLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")));

  const { handleSearchChange } = useContext(SearchContext);
 

  const onSearchChange = (e) => {
    handleSearchChange(e.target.value);
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn"); 
    setUser(null);
    isLoggedIn(false); 
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [localStorage.getItem("user")]);
  

  return (
    <>
  
      <Flex
        flexDir={isMedia && "column"}
        bg={"#c1ddc6"}
        p={"2.5px"}
        justifyContent={"center"}
        gap={isMedia ? "5px" : "50px"}
        textAlign={"center"}
      >
        <Link className="link">Free shipping over 35 €</Link>
        <Link className="link">Subscribe to our Newsletter</Link>
      </Flex>

      

      <Flex
        justifyContent={isLeft ? "space-evenly" : "space-between"}
        alignItems={"center"}
        padding={"30px"}
        pb={"5"}
      >
        <Flex display={isLeft && "none"}>
    
          <Popover>
            <PopoverTrigger>
              <Button
                rightIcon={<ChevronDownIcon />}
                border={"none"}
                background="none"
              >
            <Image src={country} height={7} width={7} />
              </Button>
            </PopoverTrigger>
            <PopoverContent bg={"white"} p={"25px"} spacing ={"5px"}>
              <PopoverArrow />  <Center>
              <Flex gap="65px" mb={"10px"}>
              <PopoverHeader fontWeight={"600"} >SHIPPING COUNTRY</PopoverHeader> 
                <PopoverCloseButton bg={"transparent"} border={"none"} />
              </Flex></Center> 

              <Button onClick={() => setCountry(India)} variant="unstyled"  mb={2} mt={2}>
  <Flex align="center" justify="space-between" w="100%" p={0}>
    <Image src={India} alt="India Flag" boxSize="30px" mr={0} />
    <Text flex="2" textAlign="center" mr={10}>
      India
    </Text>
    <Text flex="1" textAlign="right">
      INR(₹)
    </Text>
  </Flex>
</Button>

  
<Button onClick={() => setCountry(Canada)} variant="unstyled"  mb={2} mt={2}>
  <Flex align="center" justify="space-between" w="100%" p={0}>
    <Image src={Canada} alt="Canada Flag" boxSize="30px" mr={0} />
    <Text flex="2" textAlign="center" mr={10}>
      Canada
    </Text>
    <Text flex="1" textAlign="right">
      CAD($)
    </Text>
  </Flex>
</Button>

<Button onClick={() => setCountry(Korea)} variant="unstyled"  mb={2} mt={2}>
  <Flex align="center" justify="space-between" w="100%" p={0}>
    <Image src={Korea} alt="Korea Flag" boxSize="30px" mr={0} />
    <Text flex="2" textAlign="center" mr={10}>
      Korea
    </Text>
    <Text flex="1" textAlign="right">
      KRW(W)
    </Text>
  </Flex>
</Button>

<Button onClick={() => setCountry(USA)} variant="unstyled"  mb={2} mt={2}>
  <Flex align="center" justify="space-between" w="100%" p={0}>
    <Image src={USA} alt="USA Flag" boxSize="30px" mr={0} />
    <Text flex="2" textAlign="center" mr={10}>
      USA
    </Text>
    <Text flex="1" textAlign="right">
      USD($)
    </Text>
  </Flex>
</Button>

<Button onClick={() => setCountry(Mexico)} variant="unstyled"  mb={2} mt={2}>
  <Flex align="center" justify="space-between" w="100%" p={0}>
    <Image src={Mexico} alt="Mexico Flag" boxSize="30px" mr={0} />
    <Text flex="2" textAlign="center" mr={10}>
      Mexico
    </Text>
    <Text flex="-2" textAlign="right">
      MXN($)
    </Text>
  </Flex>
</Button>

            </PopoverContent>
          </Popover>

          {/* 2nd menu */}
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              border={"none"}
              background="none"
              ml={-4} 
            >
             {language}
            </MenuButton>
  
            <MenuList mb={"10px"}>
  <Stack spacing={2}>
    <Button onClick={() => setLanguage("FR")} variant="unstyled">
      <MenuItem border={"none"} bg={"white"}>
        FR
      </MenuItem>
    </Button>
    <Button onClick={() => setLanguage("DE")} variant="unstyled">
      <MenuItem border={"none"} bg={"white"}>
        DE
      </MenuItem>
    </Button>
    <Button onClick={() => setLanguage("IT")} variant="unstyled">
      <MenuItem border={"none"} bg={"white"}>
        IT
      </MenuItem>
    </Button>
    <Button onClick={() => setLanguage("ES")} variant="unstyled">
      <MenuItem border={"none"} bg={"white"}>
        ES
      </MenuItem>
    </Button>
    <Button onClick={() => setLanguage("PT")} variant="unstyled">
      <MenuItem border={"none"} bg={"white"}>
        PT
      </MenuItem>
    </Button>
  </Stack>
</MenuList>

          </Menu>
          

          <ButtonGroup>
            
            {logged ? (
  <Menu>
    <MenuButton
      as={IconButton}
      backgroundColor={'black'}
      icon={<Text color={'white'} w={'40'}>{user?.firstName}</Text>}
      variant="ghost" 
      colorScheme="black" 
    />
    <MenuList>
      <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
    </MenuList>
  </Menu>
) : (
  <Link to="/login">
    <IconButton icon={<FontAwesomeIcon icon={faUser} color="black" />} variant="ghost" colorScheme="black" />
  </Link>
)}
</ButtonGroup>
        </Flex>


        <Link to={`/`}>
          <Image src={logo} color="black" width={"150px"} />
        </Link>

      

        <Flex alignItems={"center"} gap="15px">
          <Input
            placeholder="Search..."
            border={"0"}
            borderBottom="1px solid black"
            _focus={{ outline: "none" }}
            display={isMedia && "none"}

            onChange={onSearchChange} 
          />
          
          <Link>
            <FontAwesomeIcon icon={faHeart} color="black" />
          </Link>

          <Link to={'/cart'}>
            <FontAwesomeIcon icon={faBagShopping} color="black" />
          </Link>
        </Flex>
      </Flex>
    </>
  );
}

export default NavHeader;

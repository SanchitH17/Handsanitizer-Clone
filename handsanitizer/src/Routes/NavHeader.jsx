import React from "react";

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
} from "@chakra-ui/react";

import {
  faBagShopping,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo_han.webp";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavHeader(props) {
  let [isMedia] = useMediaQuery("(max-width: 450px)");
  let [isLeft] = useMediaQuery("(max-width: 750px)");

  return (
    <>
      {/* Announcement bar */}
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

      {/* nav header */}

      <Flex justifyContent={ isLeft ? "space-evenly":"space-between"} alignItems={"center"}  padding={"30px"} pb={"0"}>
        <Flex display={isLeft && "none"}>
          {/* 1st menu */}
          <Popover>
            <PopoverTrigger>
              <Button
                rightIcon={<ChevronDownIcon />}
                border={"none"}
                background="none"
              >
                Countries
              </Button>
            </PopoverTrigger>
            <PopoverContent bg={"white"} p={"25px"}>
              <PopoverArrow />
              <Flex gap="65px">
                <PopoverHeader>SHIPPING COUNTRY</PopoverHeader>
                <PopoverCloseButton />
              </Flex>
              <PopoverBody>European Union</PopoverBody>
              <PopoverBody>United Kingdom</PopoverBody>
              <PopoverBody>USA</PopoverBody>
              <PopoverBody>Canada</PopoverBody>
              <PopoverBody>Mexico</PopoverBody>
              <PopoverBody>Korea</PopoverBody>
              <PopoverBody>Thailand</PopoverBody>
            </PopoverContent>
          </Popover>

          {/* 2nd menu */}
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              border={"none"}
              background="none"
            >
              EN
            </MenuButton>

            <MenuList>
              <MenuItem>FR</MenuItem>
              <MenuItem>DE</MenuItem>
              <MenuItem>IT</MenuItem>
              <MenuItem>ES</MenuItem>
              <MenuItem>PT</MenuItem>
            </MenuList>
          </Menu>

          {/* User Account */}


          <Link >
            <FontAwesomeIcon icon={faUser} color="black"/>
          </Link>
        </Flex>


        {/* Logo */}
        <Link >
          <Image src={logo} color="black" width={"150px"} />
        </Link>


        {/* Right side Search  and Account */}


        <Flex alignItems={"center"} gap = "15px">

          <FontAwesomeIcon icon={faMagnifyingGlass} color="black"/>
          <Link>
            <FontAwesomeIcon icon={faHeart} color="black"/>
          </Link>

          <Link>
            <FontAwesomeIcon icon={faBagShopping} color="black" />
          </Link>

        </Flex>


      </Flex>
    </>
  );
}

export default NavHeader;

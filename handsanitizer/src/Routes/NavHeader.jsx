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
  let [isMedia] = useMediaQuery("(max-width: 440px)");

  return (
    <>
      <Flex
        flexDir={isMedia && "column"}
        bg={"#c1ddc6"}
        p={"2.5px"}
        justifyContent={"center"}
        gap={isMedia ? "5px" : "50px"}
      >
        <Link className="link">Free shipping over 35 €</Link>
        <Link className="link">Subscribe to our Newsletter</Link>
      </Flex>

      <Flex justifyContent={"space-between"}>
        <Flex>
          <Popover>
            <PopoverTrigger>
              <Button rightIcon={<ChevronDownIcon />}>Trigger</Button>
            </PopoverTrigger>
            <PopoverContent>
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

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
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

          <Link>
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </Flex>
        <Link>
          <Image src={logo} />
        </Link>
        <Flex>
         <FontAwesomeIcon icon={faMagnifyingGlass} />
          <Link>
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faBagShopping} />
          </Link>
        </Flex>
      </Flex>
    </>
  );
}

export default NavHeader;

// import { Menu, MenuList } from "@chakra-ui/react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../Components/CSS/navbar.css";
import { Button, Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import NavHeader from "./NavHeader";
import { Link } from "react-router-dom";

function Navabar(props) {
  let [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <NavHeader />
      <header className={`navbar ${isMenuOpen ? "menuOpen" : ""}`}>
        <div className={`menuItems ${isMenuOpen ? "" : "open"}`}>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Shop
            </MenuButton>

            <MenuList>
              <Flex flexDir={"column"} textAlign={"left"}>

              <h5>Skin Care</h5>
              <Link>Face Cleanser</Link>
              <Link>Face Cream</Link>
              <Link>Face Serum</Link>
              <Link>Packs Skin Care</Link>
              </Flex>

            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Collection
            </MenuButton>

            <MenuList>
              <Flex flexDir={"column"} textAlign={"left"}>

              
              <Link>Travel</Link>
              <Link>Sun Care</Link>
              <Link>Sets</Link>
               
              </Flex>

            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            About Us
            </MenuButton>

            <MenuList>
              <Flex flexDir={"column"} textAlign={"left"}>

              
              <Link>Who We Are</Link>
              <Link>Purpose</Link>
              <Link>Affiliate</Link>
              <Link>Contact</Link>
               
              </Flex>

            </MenuList>
          </Menu>
          <Link>Sobremesa Talks</Link>
        </div>

        <button className="toggleButton" onClick={toggleButton}>
          {isMenuOpen ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </header>
    </>
  );
}

export default Navabar;

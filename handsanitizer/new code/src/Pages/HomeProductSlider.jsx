import React, { useRef } from "react";
import { Center, Flex, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "../Components/CSS/homeProductSlider.css";
import { useNavigate } from "react-router-dom";
import { Spinner } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'

const HomeProductSlider = ({ products, isLoading }) => {
  const navigate = useNavigate();
  const productContainerRef = useRef(null);

  const btnPressPrev = () => {
    productContainerRef.current.scrollLeft -=
      productContainerRef.current.offsetWidth;
  };

  const btnPressNext = () => {
    productContainerRef.current.scrollLeft +=
      productContainerRef.current.offsetWidth;
  };

  if (isLoading) {
    return (
      <Progress size='xs' height='22px' isIndeterminate hasStripe />
    );
  }

  return (
    <div className="product-carousel">
      <Flex justifyContent={"space-between"} p={"0 2rem"}>
        <button className="pre-btn" onClick={btnPressPrev}>
          <p><FontAwesomeIcon icon={faArrowLeft} /></p>
        </button>

        <Text
          fontWeight={"900"}
          style={{
            color: "white",
            backgroundColor: "black",
            padding: "5px 10px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "transform 0.3s",
          }}
          onClick={() => navigate(`/product`)}
        >
          Gift Sets
        </Text>

        <button className="next-btn" onClick={btnPressNext}>
          <p><FontAwesomeIcon icon={faArrowRight} /></p>
        </button>
      </Flex>

      <div className="product-container" ref={productContainerRef}>
        {products.length > 0 &&
          products.map((element, index) => (
            <div key={index} className="product-item" onClick={() => { navigate(`/product`) }}>
              <Image src={element.img} width={"98%"} pt={"10px"} alt="IMAGE-BROKEN"/>
              <Text
                fontWeight={"500"}
                style={{
                  color: "black",
                  transition: "color 0.3s",
                }}
              >
                {element.brand.split(" ").slice(0, 3).join(" ")}
              </Text>
              <Text>
                {element.MRP}
                {"€ "}
                <span className="crossed-line">{element.finalPrice}€</span>
              </Text>
              <button className="button">Add to cart</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeProductSlider;

import React, { useRef } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

import "../Components/CSS/homeProductSlider.css";

const HomeProductSlider = ({ products, isLoading }) => {
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
    return <Text>Loading...</Text>;
  }
  return (
    <div className="product-carousel">
       
      <Flex justifyContent={"space-between"} p={"0 2rem"}>
      <button className="pre-btn" onClick={btnPressPrev}>
        <p>&lt;</p>
      </button>
      <Text>Gift Sets</Text>
      <button className="next-btn" onClick={btnPressNext}>
        <p>&gt;</p>
      </button>
      </Flex>

      <div className="product-container" ref={productContainerRef}>
        {products.length > 0 &&
          products.map((element, index) => (
            <div key={index} className="product-item">
              <Image src={element.image} width={"75%"}  />
              <Text>{element.title}</Text>
              <Text>
                {element.price1}{" "}
                <span className="crossed-line">{element.price2}</span>
              </Text>
              <button className="button">Add to cart</button>
            </div>
          ))}
      </div>
     
    </div>
  );
};

export default HomeProductSlider;

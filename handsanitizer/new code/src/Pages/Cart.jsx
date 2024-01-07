import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Image,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useMediaQuery,
} from '@chakra-ui/react';
import { AddIcon, CloseIcon, MinusIcon } from '@chakra-ui/icons';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [spin, setSpinner] = useState(true);
  const [subTotal, setSubTotal] = useState(0);

  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const [isLargerThan820] = useMediaQuery('(max-width: 1050px)');

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDeleteCart = (id) => {
  
    const updatedCart = cart.filter((item) => item.Id !== id);

    const updatedCartLocalStorage = updatedCart.map(({ Id, ...rest }) => rest);
    localStorage.setItem('cart', JSON.stringify(updatedCartLocalStorage));
  
    setCart(updatedCart);
    updateSubTotal(updatedCart);
  };

  const calculateSubTotal = (cartData) => {
  
    const validCartData = Array.isArray(cartData) ? cartData : [];
  
    return validCartData.reduce((acc, element) => acc + element.MRP, 0);
  };
  
  const updateSubTotal = (cartData) => {
    const updatedSubTotal = calculateSubTotal(cartData);
    setSubTotal(updatedSubTotal.toFixed(2));
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
    updateSubTotal(storedCart);
    setSpinner(false);
  }, []);

  const handleCount = (productId, value) => {
    const updatedCart = [...cart];
  
    const productIndex = updatedCart.findIndex(
      (element) => element.Id === productId
    );
  
    if (productIndex !== -1) {
      updatedCart[productIndex].quantity += value;
  
      // Use finalPrice or provide a default value if it's not present
      const finalPrice = updatedCart[productIndex].finalPrice || 0;
  
      updatedCart[productIndex].MRP = updatedCart[productIndex].quantity * finalPrice;
    }
  
    setCart(updatedCart);
    updateSubTotal(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  

  return (
    <Flex
      m={'auto'}
      mt={'13rem'}
      justifyContent={'space-around'}
      alignItems="center"
      flexDir={isLargerThan820 ? 'column' : 'row'}
    >
      <Box
        width={isLargerThan820 ? '65%' : '65%'}
        mb={isLargerThan820 && '3rem'}
      >
        {spin ? (
          <Center>
            <Spinner m={'4rem'} size="xl" />
          </Center>
        ) : (
          <TableContainer>
            <Table colorScheme="#000">
              <Thead>
                <Tr>
                  <Th fontSize={20}>PRODUCT</Th>
                  <Th fontSize={20}>QUANTITY</Th>
                  <Th fontSize={20}>TOTAL</Th>
                  <Th fontSize={19}>REMOVE</Th>
                  <Th></Th>
                </Tr>
              </Thead>

              <Tbody>
                {cart?.length > 0 &&
                  cart?.map((element) => {
                    return (
                      <Tr key={element.Id}>
                        <Td>
                          {element.img && (
                            <Image width={'100px'} src={element.img} />
                          )}
                      
                          <Text fontSize={18} color={'black'} fontWeight={500} mt={5} decoration={"bold"} align={'left'}>
                            {element.brand
                              ? `${element.brand}`
                                  .split(' ')
                                  .slice(0, 4)
                                  .join(' ')
                              : 'Brand Not Available'}
                          </Text> 
                        </Td>
                        <Td>
  <AddIcon
    cursor={'pointer'}
    mr={"5"}
    onClick={() => {
      handleCount(element.Id, 1);
    }}
  />
  <Box backgroundColor={'black'} display="inline-block" padding="2px 8px" borderRadius="4px">
    <Text color={'white'}>{element.quantity}</Text>
  </Box>
  <MinusIcon
    ml={"5"}
    style={{
      pointerEvents: element.quantity === 1 ? 'none' : 'auto',
    }}
    cursor={'pointer'}
    onClick={() => {
      if (element.quantity !== 1) {
        handleCount(element.Id, -1);
      }
    }}
  />
</Td>

                        <Td>
                
                          {element.MRP
                            ? element.MRP.toFixed(2)
                            : 'Total Not Available'}{' '}
                          €
                        </Td>
                        <Td
                          cursor={'pointer'}
                          onClick={() => {
                            handleDeleteCart(element.Id);
                          }}
                        >
                          <Button backgroundColor={"red"}>
                            <CloseIcon color={"white"}/>
                          </Button>
                        </Td>
                      </Tr>
                    );
                  })}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Box>
      <Box width={isLargerThan820 ? '40%' : '20%'} height={'20vh'}>
        <Text fontSize={'12px'}>
          SPEND 8,60€ MORE TO RECEIVE FREE SHIPPING
        </Text>

        <Divider
          width={'100%'}
          borderWidth="3.5px"
          borderRadius={'10px'}
          opacity={1}
        />
        {spin ? (
          <Spinner />
        ) : (
          <Text
            textAlign={'center'}
            mt={'5%'}
            fontSize={'20px'}
            fontWeight={'500'}
          >
            Subtotal: {subTotal} €
          </Text>
        )}
        <Center>
          <Box
            as={Button}
            w={'100%'}
            m={'auto'}
            mt={'8%'}
            bg={isHovered ? 'white' : 'black'}
            color={isHovered ? 'black' : '#ffffff'}
            borderRadius={'40px'}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              navigate('/checkout');
            }}
          >
            Checkout
          </Box>
        </Center>
      </Box>
    </Flex>
  );
};

export default Cart;
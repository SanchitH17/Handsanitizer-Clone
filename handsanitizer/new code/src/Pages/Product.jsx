import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Select } from '@chakra-ui/react';

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import Pagination from './Pagination';

const Product = () => {
  const navigate = useNavigate();
  const limit = 10;

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProd, setTotalProd] = useState(null);
  const [sortOption, setSortOption] = useState('');
  const [filterOption, setFilterOption] = useState('');

  const fetchdata = async () => {
    let apiUrl = `https://sanitizer-5qvt.onrender.com/products?_limit=${limit}&_page=${currentPage}`;

    if (sortOption === 'priceLowToHigh') {
      apiUrl += `&_sort=finalPrice`;
    }
    if (sortOption === 'priceHighToLow') {
      apiUrl += `&_sort=finalPrice&_order=desc`;
    }
    if (filterOption) {
      apiUrl += `&brand=${filterOption}`;
    }

    const response = await fetch(apiUrl);
    const responseData = await response.json();
    setData(responseData);
    setTotalProd(response.headers.get('X-Total-Count'));
  };

  useEffect(() => {
    fetchdata();
  }, [currentPage, sortOption, filterOption]);

  const totalPages = Math.ceil(totalProd / limit);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  const addToCart = (product) => {
    
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
  
    
    const existingProductIndex = existingCart.findIndex(
      (item) => item.Id === product.Id
    );
  
    if (existingProductIndex !== -1) {
      
      existingCart[existingProductIndex].quantity += 1;
    } else {
    
      const updatedCart = [...existingCart, { ...product, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', marginTop: '180px' }}>
        <Select
          value={sortOption}
          onChange={handleSortChange}
          marginRight={4}
        >
          <option value=''>Sort By</option>
          <option value='priceLowToHigh'>Price (Low to High)</option>
          <option value='priceHighToLow'>Price (High to Low)</option>
          <option value='name'>Name</option>
        </Select>
        <Select value={filterOption} onChange={handleFilterChange}>
          <option value=''>Filter By</option>
          <option value='brand1'>Face Cream</option>
          <option value='brand2'>Brand 2</option>
        </Select>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          width: '80%',
          margin: 'auto',
        }}
      >
        {data.map((Product) => {
          return (
            <Card key={Product.id} maxW='sm' id='card'>
              <CardBody>
                <Image
                  src={Product.img}
                  alt='Product Image'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Link to='#' style={{ textDecoration: 'none' }}>
                    <Heading size='md'>
                      <Text style={{ fontWeight: '500' }} className='hero'>
                        {Product.brand}
                      </Text>
                    </Heading>
                  </Link>
                  <Text
                    color='blue.600'
                    fontSize='2xl'
                    textDecoration={'line-through'}
                    mt={-5}
                  >
                    {Product.MRP}€
                  </Text>
                  <Text color='blue.600' fontSize='2xl' mt={-7}>
                    {Product.finalPrice}€
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter ml={10}>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'>
                    Buy now
                  </Button>
                  <Button
                    variant='ghost'
                    colorScheme='blue'
                    onClick={() => {
                      addToCart(Product);
                      navigate('/cart');
                    }}
                  >
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default Product;

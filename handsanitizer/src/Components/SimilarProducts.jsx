import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";

const data = [
	{
		imageUrl:
			"https://haanready.com/cdn/shop/products/Refill_SA_MF_ForestGrace.jpg?v=1678356460",
		name: "Hand Sanitizer Refill Forest Grace",
		price: "5,90€",
	},
	{
		imageUrl:
			"https://haanready.com/cdn/shop/products/Pocket_SA_MF_ForestGrace.jpg?v=1678356444",
		name: "Hand Sanitizer Forest Grace",
		price: "5,90€",
	},
	{
		imageUrl:
			"https://haanready.com/cdn/shop/products/Pocket_SA_MF_TalesLotus_1.jpg?v=1678356415",
		name: "Hand Sanitizer Tales of Lotus",
		price: "5,90€",
	},
	{
		imageUrl:
			"https://haanready.com/cdn/shop/products/VERBENA_c68a33ec-f4ee-4307-956c-2975040e95ba.jpg?v=1651510939",
		name: "Hand Sanitizer Purifying verbena",
		price: "9,90€",
	},
];

const SimilarProducts = () => {
	return (
		<Box>
			<Text mt={"30px"} mb={'20px'} fontWeight={'600'} fontSize={'20px'}>You may also like</Text>
			<Flex m="auto" w="1200px" gap={6}>
				{data.map((item) => (
					<Flex flex={1} flexDir={"column"} justify={"center"} gap={4}>
						<Img src={item.imageUrl} alt={item.name} w="100%" h="100%"></Img>
						<Text>{item.name}</Text>
						<Text>{item.price}</Text>
						<Button variant={'outline'} colorScheme="black" rounded={'full'} p={'20px'} w="200px" m="auto">Add to cart</Button>
					</Flex>
				))}
			</Flex>
		</Box>
	);
};

export default SimilarProducts;

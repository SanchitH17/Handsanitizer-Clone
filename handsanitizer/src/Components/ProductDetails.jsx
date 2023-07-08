import {
	Box,
	Button,
	Flex,
	Img,
	Text,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import {
	AiOutlineDown,
	AiOutlineHeart,

	AiOutlineUp,
} from "react-icons/ai";

const ProductDetails = () => {
	return (
		<div>
			<Flex
				fontFamily={"apercu"}
				id="container"
				justify={"center"}
				mt="30px"
				mx="auto"
				h="600px"
				w="1200px"
			>
				<Flex flex={1} align={'flex-start'}>
					<Img
						src="https://haanready.com/cdn/shop/products/Pack3_SA_MF.jpg?v=1678874635"
						objectFit={"contain"}
						w="100%"
						h="100%"
					></Img>
				</Flex>
				<Box flex={1} pl="130px" pr="30px" textAlign={"left"}>
					<Text
						fontSize={"36px"}
						fontWeight={400}
						lineHeight={0.8}
						letterSpacing={"-.14px"}
						mb={"15px"}
					>
						3 Hand Sanitizers Mystic Foliage
					</Text>
					<Flex justify={"space-between"} mb={"17px"}>
						<Flex fontSize={"28px"} gap="1">
							<Text textDecoration={"line-through"} color={"#9b9b9b"}>
								15,90€
							</Text>
							<Text>13,50€</Text>
						</Flex>
						<Flex alignItems={"center"}>
							<AiOutlineHeart style={{ width: "26px", height: "26px" }} />
						</Flex>
					</Flex>
					<Text fontSize={"14px"} mb="15px">
						or 3 installments of{" "}
						<span style={{ fontWeight: "bold" }}>4,50 €</span> without interest.{" "}
						<span style={{ fontWeight: "bold" }}>Scalapay</span> ⓘ
					</Text>
					<Text mb="15px">
						Cleanse and moisturize your hands with this formula with Aloe Vera
						that eliminates 99.99% of bacteria. This Mystic Foliage collection
						will leave your hands delicately scented and remind you of the
						warmness of the tropics and the exotic flora.
					</Text>
					<Text textDecoration={"underline"} mb="20px" fontSize={"14px"}>
						What's inside
					</Text>
					<Text textDecoration={"underline"} fontSize={"14px"}>
						Benefits
					</Text>
					<Flex gap={"10px"} alignItems={"center"}>
						<Text
							display={"flex"}
							alignItems={"center"}
							gap={3}
							border={"1px solid black"}
							p="8px"
							rounded="full"
						>
							<AiOutlineDown />
							<span>1</span>
							<AiOutlineUp />
						</Text>
						<Button
							border={"1px solid #c1ddc6"}
							bgColor="#c1ddc6"
							color={"white"}
							fontSize={"20px"}
							p={"10px"}
							flex={1}
							rounded={"full"}
						>
							ADD TO CART
						</Button>
					</Flex>
					<Box mt="30px">
						<Accordion allowToggle>
							<AccordionItem>
								<h2>
									<AccordionButton border='none' backgroundColor='white'>
										<Box as="span" flex='1' textAlign='left'>
											How to use
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat.
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<h2>
									<AccordionButton border='none' backgroundColor='white' >
										<Box as="span" flex='1' textAlign='left'>
											Shipping & Payment
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat.
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</Box>
				</Box>
			</Flex>
		</div>
	);
};

export default ProductDetails;

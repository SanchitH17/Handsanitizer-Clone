import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const data = [
	{
		bgColor: "#6a9a9c",
		title: "Forest Grace",
		description:
			"It will transport you to the quietness of a humid rainforest in the tropics through the scent of green energy and fruit.",
		imageUrl:
			"https://haanready.com/cdn/shop/files/Forest_Grace_de1b31ce-cee9-4e1b-8019-bf53600b8f24.jpg?v=1678270882",
	},
	{
		bgColor: "#dfcab3",
		title: "Wild Orchid",
		description:
			"Its warm notes will remind you of Wild Orchids, Vanilla Flowers and Indian Sandalwood.",
		imageUrl:
			"https://haanready.com/cdn/shop/files/Wild_Orchid_1_09d8fd44-7759-471d-a01e-df75f95c137b.jpg?v=1678714619",
	},
	{
		bgColor: "#debabc",
		title: "Tales of Lotus",
		description:
			"It will remind you to Oriental Forests and Lotus Flowers through its dry fruity notes.",
		imageUrl:
			"https://haanready.com/cdn/shop/files/Tales_of_Lotus_03f5531f-5766-4b21-aa0a-8d544a456705.jpg?v=1678359261",
	},
];

const SlideShow = () => {
	const [slide_number, setSlide_number] = useState(0);

	const changeSlide = (val) => {
		if (slide_number === 0 && val === -1) {
			setSlide_number(2);
		} else if (slide_number === 2 && val === 1) {
			setSlide_number(0);
		} else {
			setSlide_number((prev) => prev + val);
		}
	};

	return (
		<Flex h="550px" position={"relative"}>
			<Box flex={1} bgColor={data[slide_number].bgColor} color="white" h="100%">
				<Text mt={"55px"} fontSize={"22px"}>
					MYSTIC FOLLIAGE
				</Text>
				<Box mt="120px" mx="175px">
					<Text fontSize={"60px"}>{data[slide_number].title}</Text>
					<Text
						fontSize={"27px"}
						fontFamily={"Benton Mod Text Rom"}
						lineHeight={1.07}
					>
						{data[slide_number].description}
					</Text>
				</Box>
			</Box>
			<Box flex={1}>
				<Img
					src={data[slide_number].imageUrl}
					alt={data[slide_number].title}
					w="100%"
					h="100%"
				></Img>
			</Box>
			<AiOutlineArrowLeft
				style={{
					position: "absolute",
					top: "50%",
					left: "50px",
					fontSize: "25px",
					color: "white",
				}}
				onClick={() => changeSlide(1)}
			/>
			<AiOutlineArrowRight
				style={{
					position: "absolute",
					top: "50%",
					right: "50px",
					fontSize: "25px",
					color: "white",
				}}
				onClick={() => changeSlide(-1)}
			/>
		</Flex>
	);
};

export default SlideShow;

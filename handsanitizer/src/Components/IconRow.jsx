import { Flex, Img, Text } from "@chakra-ui/react";

const iconsData = [
	{
		iconURL:
			"https://haanready.com/cdn/shop/files/ICONOS_13.05_1_0688649d-ce15-4ae9-b6fa-d14e4a6e9786@2x.png?v=1678714836",
		iconText: "Prebiotic Complex",
	},
	{
		iconURL:
			"https://haanready.com/cdn/shop/files/icono_Clean_Ingredients_ab575a70-70ad-45da-9609-55162465da54@2x.png?v=1678714876",
		iconText: "97% Natural Origin",
	},
	{
		iconURL:
			"https://haanready.com/cdn/shop/files/icono_Clean_Ingredients_ab575a70-70ad-45da-9609-55162465da54@2x.png?v=1678714876",
		iconText: "Travel Friendly",
	},
	{
		iconURL:
			"https://haanready.com/cdn/shop/files/86x86_Mesa_de_trabajo_1_1_fe00b8c1-93eb-4c98-8611-d616367a83e3@2x.png?v=1678714930",
		iconText: "Ready to Refil",
	},
];

const IconRow = () => {
	return (
		<Flex justify={'center'} mt="50px" mb="30px" fontFamily={'apercu'}>
			{iconsData.map((icon) => (
				<Flex flexDir={"column"} w="100px" align={'center'}>
					<Img src={icon.iconURL} alt={icon.iconText} w="40px" h="40px" mb="12px"></Img>
					<Text fontSize={"14px"}>{icon.iconText}</Text>
				</Flex>
			))}
		</Flex>
	);
};

export default IconRow;

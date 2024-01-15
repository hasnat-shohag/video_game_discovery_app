import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwithch from "./ColorModeSwithch";

const NavBar: React.FC = () => {
	return (
		<HStack justifyContent={"space-between"} padding={'10px'}>
			<Image src={logo} boxSize={"60px"} />
			<ColorModeSwithch />
		</HStack>
	);
};

export default NavBar;

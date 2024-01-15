import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
	return (
		<Grid
			templateAreas={{
				base: `
				"nav"
				"main"
			`,
				lg: `
				"nav nav"
				"main aside"
			`,
			}}
		>
			<GridItem gridArea="nav">
				<NavBar />
			</GridItem>
			<Show above="lg">
				<GridItem gridArea="aside" bg="papayawhip" h="100px">
					aside
				</GridItem>
			</Show>
			<GridItem gridArea="main" bg="pink" h="100px">
				main
			</GridItem>
		</Grid>
	);
}

export default App;

import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";

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
			<GridItem gridArea="nav" bg="tomato" h="100px">
				nav
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

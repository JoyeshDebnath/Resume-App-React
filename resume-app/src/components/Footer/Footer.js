import React from "react";
import { Toolbar, AppBar, Typography, Container } from "@material-ui/core";

export default function Footer() {
	return (
		<AppBar
			position="static"
			style={{ backgroundColor: "#0a0908", display: "flex" }}
		>
			<Container maxWidth="md">
				<Toolbar>
					<Typography variant="body1" color="inherit">
						© 2019 Gistia
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

import React from "react";

import Button from "@material-ui/core/Button";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";

const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		// backgroundColor: theme.palette.background.paper,
		backgroundColor: "#000000",
		color: "white",
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
	},
	cardMedia: {
		paddingTop: "56.25%",
		height: "100%",
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		position: "absolute",
		bottom: 0,
		width: "100%",

		backgroundColor: "#000000",
		padding: theme.spacing(6),
	},
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<>
			{/* Footer */}
			<footer className={classes.footer}>
				<Typography variant="h6" align="center" gutterBottom color="secondary">
					Important Links🚀🚀
				</Typography>
				<Grid
					container
					container
					direction="row"
					justify="center"
					alignItems="center"
					color="white"
					style={{ marginTop: "2rem", marginBottom: "2rem" }}
				>
					{/* footer links to our documentation */}
					<Button
						target="__blank"
						href="https://github.com/saikatXshrey/Bioscope-OTT-platform"
					>
						<GitHubIcon
							fontSize="large"
							color="secondary"
							style={{ cursor: "pointer" }}
						/>
					</Button>
					<Button
						target="__blank"
						href="https://drive.google.com/drive/folders/1q3N0rR6orl4YfuggRlCiO6YZiyRasRdZ?usp=sharing"
					>
						<DescriptionIcon
							fontSize="large"
							color="primary"
							style={{ cursor: "pointer" }}
						/>
					</Button>
					<Button
						target="__blank"
						href="https://drive.google.com/drive/folders/1sRF24fFwfgG9jNWqH4AJdkU5xsoHRxCF?usp=sharing"
					></Button>
				</Grid>
			</footer>
			{/* End footer */}
		</>
	);
};

export default Footer;

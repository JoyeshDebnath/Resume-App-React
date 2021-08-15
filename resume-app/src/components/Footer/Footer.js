import React from "react";
import {
	Toolbar,
	AppBar,
	Typography,
	Container,
	makeStyles,
} from "@material-ui/core";
import { AiFillGithub } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const useStyles = makeStyles({
	position: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
	},
	icons: {
		marginLeft: "2rem",
		fontSize: "2rem",
		cursor: "pointer",
		"&:hover": {
			color: "#d55d92",
		},
	},
});

export default function Footer() {
	const classes = useStyles();
	return (
		<AppBar
			position="static"
			style={{
				backgroundColor: "#0a0908",
			}}
		>
			<Container maxWidth="md">
				<Toolbar className={classes.position}>
					{/* <Typography variant="body1" color="inherit"> */}
					<a href="https://github.com/JoyeshDebnath" target="_blank">
						<AiFillGithub className={classes.icons} />
					</a>

					<a
						href="https://www.instagram.com/joyeshdebnath9311/"
						target="_blank"
					>
						<GrInstagram className={classes.icons} />
					</a>

					<a href="https://www.facebook.com/joyesh.debnath.1" target="_blank">
						<FaFacebook className={classes.icons} />
					</a>
					<a href="https://twitter.com/JoyeshDebnath" target="_blank">
						<AiFillTwitterCircle className={classes.icons} />
					</a>
					<a
						href="https://www.linkedin.com/in/joyesh-debnath-549b3b208/"
						target="_blank"
					>
						<AiFillLinkedin className={classes.icons} />
					</a>
					{/* </Typography> */}
				</Toolbar>
			</Container>
		</AppBar>
	);
}

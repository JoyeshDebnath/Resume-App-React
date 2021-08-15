import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Contact from "./Contact";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa";
const useStyles = makeStyles({
	root: {
		minWidth: "80%",
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	text: {
		color: "white",
		fontSize: "2rem",
	},
});

export default function Skill() {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<Card className={classes.root} style={{ backgroundColor: "#292F36" }}>
			<CardContent>
				<Contact />
				<br />
				<br />

				<CardContent style={{ backgroundColor: "#000000" }}>
					<Typography
						className={classes.text}
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							color: "#38b000",
						}}
					>
						<IoLogoWhatsapp
							className={classes.text}
							style={{ marginRight: "0.5rem", color: "#38b000" }}
						/>

						<h3>8584979439</h3>
					</Typography>

					<Typography
						className={classes.text}
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							color: "#ff6b6b",
						}}
					>
						<FaPhoneVolume
							className={classes.text}
							style={{ marginRight: "0.5rem", color: "#ff6b6b" }}
						/>

						<h3>8584979439</h3>
					</Typography>
				</CardContent>
			</CardContent>
		</Card>
	);
}

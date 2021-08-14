import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Contact from "./Contact";

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
});

export default function Skill() {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<Card className={classes.root} style={{ backgroundColor: "#292F36" }}>
			<CardContent>
				<Contact />
			</CardContent>
			{/* <CardActions>
				<Button size="small">Learn More</Button>
			</CardActions> */}
		</Card>
	);
}

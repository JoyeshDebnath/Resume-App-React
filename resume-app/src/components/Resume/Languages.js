import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
	liStyle: {
		color: "white",
		fontSize: "2rem",
		textDecoration: "none",
	},
});

export default function Languages() {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<Card className={classes.root}>
			<CardContent style={{ backgroundColor: "#000000" }}>
				<Typography style={{ color: "white" }}>
					<ul style={{ textDecoration: "none" }}>
						<li className={classes.liStyle}>ENGLISH</li>
						<li className={classes.liStyle}>BENGALI</li>
						<li className={classes.liStyle}>HINDI</li>
					</ul>
				</Typography>
			</CardContent>
		</Card>
	);
}

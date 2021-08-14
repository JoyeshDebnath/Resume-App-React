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
		backgroundColor: "#000004",
		marginTop: "1rem",
		color: "#FBFEF9",
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
		fontSize: "2rem",
	},
});

export default function Education({ data }) {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				<Typography
					className={classes.title}
					color="textSecondary"
					gutterBottom
				></Typography>
				<Typography variant="h4">{data.edu}</Typography>
				<Typography className={classes.pos}>Degree: {data.deg}</Typography>
				<Typography variant="h4">
					Percentage:{data.per}
					<br />
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
}

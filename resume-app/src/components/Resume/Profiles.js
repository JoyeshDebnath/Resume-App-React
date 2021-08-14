import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { SiLeetcode } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
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

export default function Profiles() {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<Card className={classes.root}>
			<CardContent style={{ backgroundColor: "#000000" }}>
				<Typography style={{ color: "white" }}>
					<ul style={{ textDecoration: "none" }}>
						<a
							href="https://leetcode.com/Joyesh/"
							style={{ textDecoration: "none" }}
						>
							<SiLeetcode style={{ fontSize: "2rem", color: "#ff3c38" }} />
							{"    "}{" "}
							<span style={{ fontSize: "2rem", color: "#ff3c38" }}>
								{" "}
								LEETCODE
							</span>
						</a>

						<a
							href="https://github.com/JoyeshDebnath"
							style={{ textDecoration: "none" }}
						>
							<br />
							<br />
							<FaGithubSquare style={{ fontSize: "2.3rem", color: "white" }} />
							{"    "}{" "}
							<span style={{ fontSize: "2rem", color: "white" }}> GITHUB</span>
						</a>
					</ul>
				</Typography>
			</CardContent>
		</Card>
	);
}

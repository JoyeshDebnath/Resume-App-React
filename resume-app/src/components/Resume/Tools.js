import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { SiFirebase } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { SiVisualstudiocode } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiJava } from "react-icons/di";

const useStyles = makeStyles({
	root: {
		minWidth: "80%",
		display: "flex",
		backgroundColor: "#000004",
		justifyContent: "space-evenly",
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
	icons: {
		fontSize: "2rem",
		marginLeft: "2rem",
		marginRight: "2rem",
	},
});

export default function Tools({ data }) {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				<SiFirebase style={{ color: "#F5820D" }} className={classes.icons} />
				<AiFillGithub className={classes.icons} />
				<SiVisualstudiocode
					className={classes.icons}
					style={{ color: "#118ab2" }}
				/>
				<RiReactjsLine className={classes.icons} style={{ color: "#0466c8" }} />
				<SiMongodb className={classes.icons} style={{ color: "#70e000" }} />
				<FaNodeJs className={classes.icons} style={{ color: "#4f772d" }} />

				<DiJava className={classes.icons} style={{ color: "#c1121f" }} />
				<SiJavascript className={classes.icons} style={{ color: "#ffdd00" }} />
			</CardContent>
		</Card>
	);
}

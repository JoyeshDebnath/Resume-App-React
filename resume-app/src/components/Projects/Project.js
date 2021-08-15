import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { AiOutlineGithub } from "react-icons/ai";
import { FaRocket } from "react-icons/fa";

const useStyles = makeStyles({
	root: {
		width: "25rem",
		height: "30rem",
		marginTop: "1rem",
		marginBottom: "1rem",
		backgroundColor: "#000000",
		marginLeft: "1rem",
		marginRight: "1rem",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	media: {
		height: 140,
	},
	heading: {
		fontSize: "2rem",
		fontWeight: 600,
		letterSpacing: "3px",
		color: "white",
	},
	icons: {
		fontSize: "2rem",
		color: "#e63946",
		"&:hover": {
			color: "#023e8a",
		},
	},
});

export default function Project({ project }) {
	const { title, description, img, git, live } = project;
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea style={{ cursor: "default" }}>
				<CardMedia
					className={classes.media}
					image={img}
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="h2"
						className={classes.heading}
					>
						{title}
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
						style={{ color: "white" }}
					>
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions style={{}}>
				<Button size="small" color="primary">
					<a href={git} target="_blank">
						<AiOutlineGithub className={classes.icons} />
					</a>
				</Button>
				<Button size="small" color="primary">
					<a href={live} target="_blank">
						<FaRocket className={classes.icons} />
					</a>
				</Button>
			</CardActions>
		</Card>
	);
}

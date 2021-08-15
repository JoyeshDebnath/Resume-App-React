import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Typography, Grid, Container } from "@material-ui/core";
import Project from "./Project";
import { db } from "../../firebase";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: "80%",
		minHeight: "100vh",
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: "2rem",
		color: "white",
		marginBottom: "1rem",
		textAlign: "center",
	},
	pos: {
		marginBottom: 12,
	},

	// icon: {
	// 	marginRight: theme.spacing(2),
	// },
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
		backgroundColor: "#292F36",
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
}));

export default function Skill() {
	const classes = useStyles();
	const [projects, setProjects] = useState([]);

	const fetchProjects = () => {
		db.collection("projects")
			.get()
			.then((querySnapshot) => {
				// Loop through the data and store
				// it in array to display
				querySnapshot.forEach((item) => {
					var data = item.data();
					setProjects((arr) => [...arr, data]);
				});
			});
	};

	useEffect(() => {
		fetchProjects();
	}, []);

	console.log(projects);
	return (
		<Container className={classes.cardGrid} maxWidth="lg">
			<Typography className={classes.title}>PROJECTS🚀</Typography>
			<hr />
			<br />
			<br />
			<Grid
				container
				spacing={4}
				direction="row"
				justify="space-evenly"
				alignItems="center"
			>
				{projects &&
					projects.map((project) => {
						return <Project project={project} />;
					})}
			</Grid>
		</Container>
	);
}

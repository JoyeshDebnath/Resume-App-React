import React from "react";
import { Grid, Typography, makeStyles, Button } from "@material-ui/core";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import Education from "./Education";
import Skill from "./Skill";
import Languages from "./Languages";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import Tools from "./Tools";
const arr = [
	{
		edu: "The Assembly Of God Church School",
		year: "2016-2017",
		per: "94.5%",
		deg: "ICSE",
	},
	{
		edu: "The Assembly Of God Church School",
		year: "2018-2019",
		per: "89.2%",
		deg: "ISC",
	},
	{
		edu: "The Kalinga Institute Of Technology",
		year: "2019-2023",
		per: "8.54 CGPA",
		deg: "B-TECH (ECSE)",
	},
];

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	heading: {
		fontWeight: 600,
		letterSpacing: "3px",
		color: "#FBFEF9",
		marginTop: "1rem",
	},
}));

const Resume = () => {
	const classes = useStyles();
	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="stretch"
			style={{ backgroundColor: "red", padding: "5px" }}
		>
			<Grid
				container
				spacing={3}
				direction="column"
				justifyContent="center"
				alignItems="center"
				style={{ backgroundColor: "#292F36" }}
			>
				<Typography variant="h4" className={classes.heading}>
					RESUME {"  "} <BorderColorIcon />
				</Typography>

				<Skill />
				<Typography variant="h2" style={{ color: "white", marginTop: "1rem" }}>
					TOOLS
				</Typography>
				<Tools />

				<Typography variant="h2" style={{ color: "white", marginTop: "1rem" }}>
					EDUCATION👨‍🎓
				</Typography>
				{arr.map((data) => {
					return <Education data={data} />;
				})}
				<Typography variant="h2" style={{ color: "white", marginTop: "1rem" }}>
					LANGUAGES🧏
				</Typography>
				<Languages />

				<Button
					variant="contained"
					color="secondary"
					style={{
						marginTop: "1rem",
						marginBottom: "1rem",
						fontSize: "2rem",
						letterSpacing: "0.2rem",
						padding: "1rem",
					}}
				>
					Download CV
					<CloudDownloadIcon />
				</Button>
			</Grid>
		</Grid>
	);
};

export default Resume;

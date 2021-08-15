import React, { useState, useEffect } from "react";
import { Grid, Typography, makeStyles, Button } from "@material-ui/core";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import Education from "./Education";
import Skill from "./Skill";
import Languages from "./Languages";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import Tools from "./Tools";
import Profiles from "./Profiles";
import { db } from "../../firebase.js";

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
	const [percentage, setPercentage] = useState("");

	const fetchPercent = async () => {
		const response = db.collection("cgpa");
		const data = await response.get();
		data.docs.forEach((item) => {
			setPercentage(item.data());
		});
	};

	useEffect(() => {
		fetchPercent();
	}, []);
	console.log(percentage);
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
			per: percentage.per,
			deg: "B-TECH (ECSE)",
		},
	];

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
					<hr />
				</Typography>

				<Skill />
				<Typography
					variant="h2"
					style={{
						color: "white",
						marginTop: "1rem",
						marginBottom: "0.4rem",
						fontSize: "2rem",
					}}
				>
					TOOLS USED
				</Typography>
				<Tools />

				<Typography
					variant="h2"
					style={{
						color: "white",
						marginTop: "1rem",
						marginBottom: "0.4rem",
						fontSize: "2rem",
					}}
				>
					EDUCATION👨‍🎓
				</Typography>
				{arr.map((data) => {
					return <Education data={data} />;
				})}
				<Typography
					variant="h2"
					style={{
						color: "white",
						marginTop: "1rem",
						marginBottom: "0.4rem",
						fontSize: "2rem",
					}}
				>
					LANGUAGES🧏
				</Typography>
				<Languages />
				<Typography
					variant="h2"
					style={{
						color: "white",
						marginTop: "1rem",
						marginBottom: "0.4rem",
						fontSize: "2rem",
					}}
				>
					Coding Profiles
				</Typography>
				<Profiles />
				<Button
					variant="contained"
					style={{
						marginTop: "1rem",
						marginBottom: "1.5rem",
						color: "white",
						backgroundColor: "#000000",
						fontSize: "1.2rem",
						letterSpacing: "0.2rem",
						padding: "1rem",
					}}
				>
					<a
						href="https://drive.google.com/drive/u/0/folders/1Etd9A5ZFI6JfbIK-TStsomn8c38-IgHK"
						style={{
							color: "white",
							textDecoration: "none",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						Download CV
						<CloudDownloadIcon style={{ marginLeft: "1rem" }} />
					</a>
				</Button>
			</Grid>
		</Grid>
	);
};

export default Resume;

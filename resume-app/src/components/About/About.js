import {
	Button,
	Card,
	CardActions,
	CardContent,
	makeStyles,
	Typography,
	Divider,
	Avatar,
	Grid,
} from "@material-ui/core";
import "./About.css";
import { Link } from "react-router-dom";
import JD from "./jd.jpeg";

const useStyles = makeStyles((theme) => ({
	cover: {
		// filter: "brightness(50%)",
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
                       rgba(0, 0, 0, 0.5)),url(https://www.designyourway.net/blog/wp-content/uploads/2018/12/programming-wallpaper11-700x394.jpg)`,
		// backgroundPosition: "center",

		// height: 500,
		/* Full height */
		height: "100vh",

		/* Center and scale the image nicely */

		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 40,
		fontFamily: "Montserrat",
	},

	textContainer: {
		color: "white",
	},
	large: {
		width: theme.spacing(20),
		height: theme.spacing(20),
	},
	linkText: {
		fontSize: "20px",
		color: "red",
	},
}));

const About = () => {
	const classes = useStyles();

	return (
		<Card className={classes.cover}>
			<CardContent>
				<Grid
					item
					xs={12}
					style={
						{
							// display: "flex",
							// alignItems: "center",
							// justifyContent: "spaceBetween",
						}
					}
					spacing={3}
				>
					<Typography
						style={{
							color: "#fcefb4",
							fontSize: "3rem",
						}}
					>
						ABOUT ME
						<hr />
					</Typography>
					<br />
					<Avatar
						style={{ marginLeft: "3rem", marginTop: "0.4rem" }}
						alt="Remy Sharp"
						src={JD}
						className={classes.large}
					/>
					<br />
				</Grid>

				<Typography
					className="typewriterText"
					style={{ fontSize: 40, fontFamily: "Montserrat" }}
					gutterBottom
				>
					W E L C O M E
				</Typography>
				<br />
				<hr />
				<br />
				<br />
				<Typography
					variant="h5"
					component="h2"
					style={{ color: "#ffc300", marginTop: "0.6rem" }}
				>
					Hi👋Myself Joyesh Debnath.
					<br />I love to code,watch movies and webSeries and play soccer.
				</Typography>
			</CardContent>
			<CardActions>
				{/* <Button variant="text" style={{ color: "#90caf9", fontWeight: 700 }}>
					Read More..
				</Button> */}

				<Link className="btn" to="/resume">
					Resume
				</Link>

				<Link className="btn" to="/projects">
					Projects
				</Link>

				{/* <Button>
					<Link className="btn" to="/contact">
						ContactME
					</Link>
				</Button> */}
			</CardActions>
		</Card>
	);
};

export default About;

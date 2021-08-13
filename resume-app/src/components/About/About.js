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
                       rgba(0, 0, 0, 0.5)),url(https://images.unsplash.com/photo-1562819606-b7a0ebd7e7c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)`,
		backgroundPosition: "center",
		// height: 500,
		padding: "35px 25px",
		display: "flex",
		flexDirection: "column",
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
							color: "white",
							fontSize: 60,
						}}
					>
						ABOUT ME
					</Typography>
					<Avatar
						style={{ marginLeft: "3rem" }}
						alt="Remy Sharp"
						src={JD}
						className={classes.large}
					/>
				</Grid>

				{/* <Divider light /> */}

				<Typography
					className="typewriterText"
					style={{ fontSize: 40, fontFamily: "Montserrat" }}
					gutterBottom
				>
					WELCOME TO MY PAGE
				</Typography>
				<Typography variant="h5" component="h2" style={{ color: "white" }}>
					Hello Myself Joyesh Debnath.
					<br />I love to code ,watch movies and webSeries and play soccer.
				</Typography>
			</CardContent>
			<CardActions>
				{/* <Button variant="text" style={{ color: "#90caf9", fontWeight: 700 }}>
					Read More..
				</Button> */}
				<Button>
					<Link className="btn" to="/resume">
						Resume
					</Link>
				</Button>
				<Button>
					<Link className="btn" to="/projects">
						Projects
					</Link>
				</Button>
				<Button>
					<Link className="btn" to="/contact">
						ContactME
					</Link>
				</Button>
			</CardActions>
		</Card>
	);
};

export default About;

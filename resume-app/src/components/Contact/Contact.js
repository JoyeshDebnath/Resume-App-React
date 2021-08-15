import React, { useState } from "react";
import "../../App.css";
import { db } from "../../firebase";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import DraftsIcon from "@material-ui/icons/Drafts";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	heading: {
		color: "white",
	},
	form: {
		backgroundColor: "#000000",
	},
}));

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loader, setLoader] = useState(false);

	// handleSubmit()

	const handleSubmit = (event) => {
		event.preventDefault();
		setLoader(true);
		db.collection("contacts")
			.add({
				Name: name,
				Email: email,
				Message: message,
			})
			.then(() => {
				setLoader(false);
				alert("Your Message Has Been Send To Joyesh!!Have A great Day!🙋‍♂️");
			})
			.catch((error) => {
				setLoader(false);
				alert(error.message);
			});

		// set all the inputs to default
		setName("");
		setEmail("");
		setMessage("");
	};

	const classes = useStyles();
	return (
		<Grid
			className={classes.root}
			container
			// spacing={3}

			direction="column"
			justifyContent="center"
			alignItems="center"
			style={{ backgroundColor: "#292F36" }}
		>
			<form className="form" onSubmit={handleSubmit}>
				<Typography
					variant="h3"
					className={classes.heading}
					style={{ color: "#ea7317" }}
				>
					Contact ME {"    "}
					<DraftsIcon style={{ fontSize: "2rem" }} />
				</Typography>
				<hr />

				<br />
				<label
					className={classes.heading}
					style={{ fontSize: "1.5rem", color: "#f1c453" }}
				>
					Name:
				</label>
				<input
					type="text"
					placeholder="Enter your Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label
					className={classes.heading}
					style={{ fontSize: "1.5rem", color: "#f1c453" }}
				>
					Email/Phone:
				</label>
				<input
					type="email"
					placeholder="Enter your Email id "
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label
					className={classes.heading}
					style={{ fontSize: "1.5rem", color: "#f1c453" }}
				>
					Message ME👇:
				</label>
				<textarea
					placeholder="Enter your Message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button
					type="submit"
					style={{ background: loader ? "#ccc" : " #000000", padding: "1rem" }}
				>
					Submit Message✌️
				</button>
			</form>
		</Grid>
	);
};

export default Contact;

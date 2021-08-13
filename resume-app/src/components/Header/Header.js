import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import InfoIcon from "@material-ui/icons/Info";
import ReceiptIcon from "@material-ui/icons/Receipt";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					{/* <IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton> */}
					<Typography variant="h6" className={classes.title}>
						JOYESH
					</Typography>
					<Button color="inherit">
						<Link to="/">
							<InfoIcon />
						</Link>
					</Button>
					<Button color="inherit">
						<Link to="/resume">
							<ReceiptIcon />
						</Link>
					</Button>
					<Button color="inherit">
						<Link to="/projects">
							<WbIncandescentIcon />
						</Link>
					</Button>
					<Button color="inherit">
						<Link to="/contacts">
							<ContactMailIcon />
						</Link>
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

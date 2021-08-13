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
		color: "#fff",
		textShadow:
			"0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa,0 0 92px #0fa,0 0 102px #0fa,0 0 151px #0fa",
	},
	icon: { color: "#F6F5AE" },
	neonText: {
		color: "#fff",
		textShadow:
			"0 0 7px #fff, 0 0 10px #fff,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa, 0 92px #0fa,0 0 102px #0fa,0 0 151px #0fa",
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="sticky">
				<Toolbar style={{ backgroundColor: "#2A2B2A" }}>
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
					<Button>
						<Link to="/" className={classes.icon}>
							<InfoIcon />
						</Link>
					</Button>
					<Button>
						<Link to="/resume" className={classes.icon}>
							<ReceiptIcon />
						</Link>
					</Button>
					<Button>
						<Link to="/projects" className={classes.icon}>
							<WbIncandescentIcon />
						</Link>
					</Button>
					<Button>
						<Link to="/contacts" className={classes.icon}>
							<ContactMailIcon />
						</Link>
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

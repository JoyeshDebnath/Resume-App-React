import React from "react";
import { Navbar, Nav } from "react-bootstrap";
const NavBar = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">Joyesh Debnath</Navbar.Brand>
				<Nav className="ml-auto">
					<Nav.Link href="#home">About</Nav.Link>
					<Nav.Link href="#home">Resume</Nav.Link>
					<Nav.Link href="#features">Projects</Nav.Link>
					<Nav.Link href="#pricing">Contact</Nav.Link>
				</Nav>
			</Navbar>
		</>
	);
};

export default NavBar;

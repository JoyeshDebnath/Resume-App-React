import React from "react";
import Header from "./components/Header/Header";
import { Container } from "@material-ui/core";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Route path="/" exact component={About} />
			<Route path="/projects" exact component={Projects} />
			<Route path="/resume" exact component={Resume} />
			<Route path="/contacts" exact component={Contact} />
			<Footer />
		</BrowserRouter>
	);
};
export default App;

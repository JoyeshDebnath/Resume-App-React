import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Button } from "@material-ui/core";
// import { SiMongodb } from "react-icons/si";

class PopChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			options: {
				chart: {
					background: "#000004",
					foreColor: "white",
					animations: {
						enabled: true,
						easing: "easeinout",
						speed: 800,
						animateGradually: {
							enabled: true,
							delay: 150,
						},
						dynamicAnimation: {
							enabled: true,
							speed: 350,
						},
					},
				},
				xaxis: {
					categories: [
						"JavaScript",
						"TypeScript",
						"React.Js",
						"Node.Js",
						"Express.Js",
						"Redux",
						"Next.Js",
						"MongoDB",
						"HTML",
						"CSS",
						"Material-Ui",
						"FireBase",
						"Bootstrap",
						"Java - DSA",
					],
				},
				plotOptions: {
					bar: {
						horizontal: false,
					},
				},
				fill: {
					colors: [
						function ({ value }) {
							if (value < 70) {
								return "#faa307";
							} else if (value >= 71 && value < 80) {
								return "#480ca8";
							} else if (value >= 81 && value < 90) {
								return "#007f5f";
							} else {
								return "#ef233c";
							}
						},
					],
				},
				dataLabels: {
					enabled: false,
				},
				title: {
					text: "My Skill Set🚀",
					align: "center",
					style: {
						fontSize: "35px",
						color: "#5f9ea0",
						fontFamily: ["Lucida Grande", "sans-serif"],
					},
				},
			},
			series: [
				{
					name: "Skills",
					data: [
						// this could be from a API
						80, 70, 91, 80, 82, 77, 60, 79, 92, 75, 80, 78, 80, 88,
					],
				},
			],
		};
	}

	onClick = () => {
		this.setState({
			options: {
				...this.state.options,
				plotOptions: {
					...this.state.options.plotOptions,
					bar: {
						...this.state.options.plotOptions.bar,
						horizontal: !this.state.options.plotOptions.bar.horizontal,
					},
				},
			},
		});
	};

	render() {
		return (
			<>
				<Chart
					options={this.state.options}
					series={this.state.series}
					type="bar"
					height="450"
					width="100%"
				/>
				<Button
					onClick={this.onClick}
					style={{
						color: "white",
						backgroundColor: "#D62246",
						padding: "8px",
						fontSize: "1rem",
						letterSpacing: "3px",
						height: "4rem",
						width: "8rem",
					}}
				>
					Change
				</Button>
			</>
		);
	}
}

export default PopChart;

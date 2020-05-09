import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
const api = {
	key: "e066e2c613858fe50862b4c74e2f0030",
	base: "https://api.openweathermap.org/data/2.5/"
};
//create your first component
export function Home() {
	const dateBuilder = d => {
		let months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		];
		let days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		];
	};

	return (
		<div className="home">
			<main>
				<div className="search-box">
					<input
						type="text"
						className="search-bar"
						placeholder="search..."
					/>
				</div>
				<div className="location- box">
					<div className="location">Miami FL, US</div>
					<div className="date">{dateBuilder(new Date())}</div>
				</div>
			</main>
		</div>
	);
}

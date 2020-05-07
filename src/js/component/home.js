import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<div className="card">
				<div className="card-header">
					<h4>Add Products</h4>
				</div>
				<div className="card-body">
					<input
						className="form-control"
						id="name"
						type="text"
						placeholder="Product Name"
					/>
					<input
						className="form-control"
						id="price"
						type="number"
						placeholder="Product Price"
					/>
					<input
						className="form-control"
						id="year"
						type="number"
						placeholder="Year Product"
					/>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
}

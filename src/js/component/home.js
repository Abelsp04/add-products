import React, { Component } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends Component {
	render() {
		return (
			<div className="container">
				<div className="row pt-5">
					<div className="col-md-4">
						<div className="card">
							<div className="card-header">
								<h4>Add Products</h4>
							</div>
							<form className="card-body">
								<div className="form-group">
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
										step="0.01"
										placeholder="Product Price"
									/>
									<input
										className="form-control"
										id="year"
										type="number"
										placeholder="Year Product"
									/>
								</div>
								<input
									className="btn btn-primary btn-block"
									type="submit"
									value="save"
								/>
							</form>
						</div>
					</div>
					<div className="col-md-8">
						<div className="ptoduct-list" />
					</div>
				</div>
			</div>
		);
	}
}


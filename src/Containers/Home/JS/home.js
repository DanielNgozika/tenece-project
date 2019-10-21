import React, { Component } from "react";
import styles from "../CSS/home.module.css";
import SearchBar from "../../../Components/Home/JS/search_bar";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			country: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const value = e.target.value;
		this.setState({ country: value });
	}

	handleSubmit(e) {
		e.preventDefault();
		localStorage.setItem("loading", "true");
		localStorage.setItem("country keyword", `${this.state.country}`);
		this.props.history.push("./search_result");
	}

	render() {
		return (
			<div className={styles.home}>
				<h1>Wiki Country</h1>
				<SearchBar
					value={this.state.country}
					onChange={this.handleChange}
					submit={this.handleSubmit}
				/>
			</div>
		);
	}
}

export default Home;

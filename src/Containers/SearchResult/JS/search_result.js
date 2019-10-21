import React, { Component } from "react";
import styles from "../CSS/search_result.module.css";
import EachCountry from "../../../Components/SearchResult/JS/each_result";
import SearchBar from "../../../Components/Home/JS/search_bar";

class SearchResultPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			result: null,
			country: localStorage.getItem("country keyword"),
			loading: localStorage.getItem("loading")
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	async componentDidMount() {
		try {
			const country = localStorage.getItem("country keyword");
			const request = await fetch(
				`https://restcountries.eu/rest/v2/name/${country}`
			);
			if (!request.ok) {
				const error = await request.json();
				throw Error(error.error.message);
			}
			const countryData = await request.json();
			localStorage.setItem("loading", "false");
			this.setState({
				result: countryData,
				loading: localStorage.getItem("loading")
			});
		} catch (err) {
			alert(`${err}`);
		}
	}

	handleChange(e) {
		const value = e.target.value;
		this.setState({ country: value });
	}

	handleSubmit(e) {
		e.preventDefault();
		localStorage.setItem("loading", "true");
		localStorage.setItem("country keyword", `${this.state.country}`);
		if (window.location.split("/")[1] === "./search_result") return;
		else this.props.history.push("./search_result");
	}

	showResults() {
		const { result, loading } = this.state;
		if (loading === "true") return <p>loading</p>;
		else if (result === null || result.length === 0)
			return <p>No results found.</p>;
		return result.map((country, i) => (
			<EachCountry key={i} country={country} />
		));
	}
	render() {
		return (
			<main className={styles.main}>
				<header className={styles.header}>
					<SearchBar
						value={this.state.country}
						onChange={this.handleChange}
						submit={this.handleSubmit}
					/>
				</header>
				{this.showResults()}
			</main>
		);
	}
}

export default SearchResultPage;

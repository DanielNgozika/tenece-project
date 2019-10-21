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
				throw Error(error.message);
			}
			const countryData = await request.json();
			localStorage.setItem("loading", "false");
			localStorage.setItem("result", JSON.stringify(countryData));
			this.setState({
				result: countryData,
				loading: localStorage.getItem("loading")
			});
		} catch (err) {
			this.setState({ loading: "false" });
			alert(`${err}`);
		}
	}

	handleChange(e) {
		const value = e.target.value;
		this.setState({ country: value });
	}

	async handleSubmit(e) {
		e.preventDefault();
		localStorage.setItem("loading", "true");
		this.setState({ loading: "true" });
		localStorage.setItem("country keyword", `${this.state.country}`);
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
			localStorage.setItem("result", JSON.stringify(countryData));
			this.setState({
				result: countryData,
				loading: localStorage.getItem("loading")
			});
		} catch (err) {
			this.setState({ loading: "false" });
			alert(`${err}`);
		}
	}

	showResults() {
		const { result, loading } = this.state;
		if (loading === "true") return <p>loading</p>;
		else if (result === null || result.length === 0)
			return <p className={styles.no_result}>No results found.</p>;
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
				<p className={styles.resultIndicator}>
					Showing results for <strong>{this.state.country}</strong>
				</p>
				{this.showResults()}
			</main>
		);
	}
}

export default SearchResultPage;

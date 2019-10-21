import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import Home from "./Containers/Home/JS/home";
import SearchResultPage from "./Containers/SearchResult/JS/search_result";

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/search_result" component={SearchResultPage} />
			<Route path="/" component={Home} />
		</Switch>
	</BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

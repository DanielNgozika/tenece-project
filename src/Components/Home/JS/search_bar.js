import React from "react";
import styles from "../CSS/search_bar.module.css";

const searchBar = ({ handleChange, value, submit }) => (
	<form className={styles.form} onSubmit={() => submit()}>
		<input
			placeholder="enter country name"
			value={value}
			onChange={e => handleChange(e)}
			name="country keyword"
		/>
	</form>
);

export default searchBar;

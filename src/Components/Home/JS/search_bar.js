import React, { memo } from "react";
import styles from "../CSS/search_bar.module.css";

const searchBar = ({ onChange, value, submit }) => (
	<form className={styles.form} onSubmit={e => submit(e)}>
		<input
			placeholder="enter country name"
			value={value}
			onChange={e => onChange(e)}
			name="country keyword"
		/>
	</form>
);

export default memo(searchBar);

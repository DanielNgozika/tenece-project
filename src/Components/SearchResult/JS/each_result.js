import React, { memo } from "react";
import { Link } from "react-router-dom";
import styles from "../CSS/each_result.module.css";

const eachCountry = ({ country }) => (
	<div className={styles.div}>
		<div className={styles.name}>
			<span>Country:</span>
			<span>{country.name}</span>
		</div>
		<div>
			<span>Region:</span>
			<span>{country.region}</span>
		</div>
		<div>
			<span>Population:</span>
			<span>{country.population}</span>
		</div>
		<div>
			<span>Timezone:</span>
			<span>{country.timezones[0]}</span>
		</div>
		<div>
			<span>Currency:</span>
			<span>{country.currencies[0].name}</span>
		</div>
		<div>
			<span>Languages:</span>
			<span>{country.languages[0].name}</span>
		</div>
		<div>
			<span>Calling codes:</span>
			<span>{country.callingCodes[0]}</span>
		</div>
	</div>
);

export default memo(eachCountry);

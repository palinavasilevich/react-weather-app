import React, { FC } from "react";
import { CityType } from "../../../types";

import styles from "./SearchResults.module.scss";

interface SearchResultsPropsType {
  options: CityType[];
  onSelect: (city: CityType) => void;
}

const SearchResults: FC<SearchResultsPropsType> = ({ options, onSelect }) => {
  return (
    <ul className={styles.searchResults}>
      {options.map((option: CityType, idx) => {
        const { country, name } = option;
        const flag = `https://raw.githubusercontent.com/hjnilsson/country-flags/master/png100px/${country.toLowerCase()}.png`;
        return (
          <li
            key={`${name}-${idx}`}
            onClick={() => onSelect(option)}
            className={styles.location}
          >
            <img className={styles.flag} src={flag} alt={name} />
            <p>
              <span className={styles.city}>{name}</span>, {country}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;

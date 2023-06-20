import React, { FC, ChangeEvent } from "react";
import { DebounceInput } from "react-debounce-input";
import SearchResults from "./SearchResults/SearchResults";
import DarkMode from "../UI/DarkMode/DarkMode";
import { TbMapSearch, TbSearch } from "react-icons/tb";
import { CityType } from "../../types";
import styles from "./Search.module.scss";

interface SearchPropsType {
  term: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  options: CityType[];
  setCity: (city: CityType | null) => void;
  location: { city: string; country: string } | null;
  backgroundImage: string | null | undefined;
}

const Search: FC<SearchPropsType> = ({
  term,
  onInputChange,
  options,
  setCity,
  location,
  backgroundImage,
}) => {
  return (
    <div
      className={styles.search}
      id="search"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className={styles.searchHeader}>
        <div className={styles.logo}>Weather App</div>
        <DarkMode />
        <div className={styles.location}>
          <TbMapSearch />
          <span>
            {location
              ? `${location.city}, ${location.country}`
              : "Unknown location"}
          </span>
        </div>
      </div>
      <div className={styles.searchBar}>
        <form className={styles.form}>
          <div className={styles.inputWrapper}>
            <DebounceInput
              className={styles.input}
              debounceTimeout={300}
              onChange={onInputChange}
              placeholder="Search location..."
            />
            {options && <SearchResults options={options} onSelect={setCity} />}
            <button className={styles.searchBtn}>
              <TbSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;

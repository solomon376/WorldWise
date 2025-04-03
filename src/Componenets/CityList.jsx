import React from "react";
import styles from "../styles/Citylist.module.css";
import Spinner from "./Spinner";
import CityItem from "../Componenets/CityItem";
import Message from "./Message";

function Citylist({ isLoading, cities }) {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message />;
  return (
    <ul className={styles.Citylist}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default Citylist;
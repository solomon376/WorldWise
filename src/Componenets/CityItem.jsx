import React from "react";
import styles from "../Styles/CityItem.module.css";
import { Link } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  return (
    <>
      <li>
      <Link className={styles.CityItem} to={`${id}`}>
  
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.cityName}>{cityName}</h3>
        <time className={styles.date}> {formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
        </Link>
      </li>
    </>
  );
}

export default CityItem;
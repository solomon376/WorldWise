import styles from "../Styles/CountryItem.module.css";

function CountryItem({ country}) {
    return (
        <li className={styles.CountryItem}>
            <span>{country.emoji}</span>
            <span>{country.country}</span>
        </li>
    );
}

export default CountryItem;
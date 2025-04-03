import React from "react";
import PageNavigation from "../Componenets/PageNavigation";
import styles from "../Styles/Homepage.module.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNavigation />
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your Adventures with Kelz, baby
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experience, and show your friends how 
          you have wondered the world.
        </h2>
        <Link to="/app" className="cta">Track your Journey </Link>
      </section>
    </main>
  );
}

export default Homepage;
import React from 'react'
import styles from "../Styles/Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "../Componenets/AppNav";
import { Outlet } from 'react-router-dom';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; copyright{new Date().getFullYear()} by Goldbyte Technologies
        </p>

      </footer>
    </div>
  )
}

export default Sidebar;
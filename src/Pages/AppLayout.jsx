import React from 'react'
import styles from "../Styles/AppLayout.module.css";
import Map from '../Componenets/Map';
import Sidebar from '../Componenets/Sidebar';


function AppLayout() {
  return <div className={styles.app}>
 
    <Sidebar />
    <Map />

  </div>
}

export default AppLayout;
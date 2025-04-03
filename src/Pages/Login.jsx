
import React, { useState } from 'react';
import styles from "../Styles/Login.module.css";

function Login() {
    const [email, setEmail] = useState("me@email.com");
    const [password, setPassword] = useState ("");
 return (
 <main className={styles.login}>
    <form action="" className={styles.form}>
        <div className={styles.row}>
            < label htmlFor="email">Enter your Email Address</label>
            <input type="email" name="" id="email" value={email} />
        </div>

        
 <div className={styles.row}>
    <label htmlFor="pasword">Enter Your Password</label>
    <input type="password" name="" id="password" value={password} onChange={(e) => setPassword
    (e.target.value)} placeholder="Enter your password" />
 </div>
 <div>
    <button className={styles.button}>Login</button>
 </div>
    </form>
 </main>
 )
}

export default Login;
import styles from "./Navbar.module.css";

import { useThemeColor } from "../useThemeColor";

export const Navbar = () => {
  useThemeColor("--navbar-background-color");

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.buttons}>
        <button>Login</button>
        <button>Registration</button>
      </div>
    </div>
  );
};

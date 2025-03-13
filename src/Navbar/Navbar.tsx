import styles from "./Navbar.module.css";

export const Navbar = () => {
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

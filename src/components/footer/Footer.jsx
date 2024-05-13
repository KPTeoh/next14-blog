import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>KPTeoh</div>
      <div className={styles.text}>
        KPTeoh © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
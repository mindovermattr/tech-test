import styles from "./Layout.module.scss";

type TLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: TLayoutProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Layout;

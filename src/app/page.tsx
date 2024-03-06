import styles from "./page.module.css";
import {LoginForm} from "@/app/form";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <LoginForm />
      </div>
    </main>
  );
}

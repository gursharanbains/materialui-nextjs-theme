import Image from "next/image";
import styles from "./page.module.css";
import Login from "@/ui/login/Login";
import scss from "./page.module.scss";

export default function Home() {
  return (
    <main className={scss.main}>
      <Login />
    </main>
  );
}

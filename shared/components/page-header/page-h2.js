import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./page-header.module.scss";

export default function PageH2({ title, bg = "solid" }) {
  const [show_menu, set_show_menu] = useState(false);
  const [show_services_menu, set_show_services_menu] = useState(false);
  const router = useRouter();

  return (
    <div
      className={`outer ${styles.headerOuter} ${
        bg === "transparent" ? styles.headerOuterTrans : ""
      }`}
      onClick={(ev) => {
        console.log("EV1", ev);
      }}
    >
      HEEEEEEEEEEEEEE
    </div>
  );
}

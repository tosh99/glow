import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./page-header.module.scss";
import Link from "next/link";

export default function PageH2({ title, bg = "solid" }) {
    const [show_menu, set_show_menu] = useState(false);
    const [show_services_menu, set_show_services_menu] = useState(false);
    const router = useRouter();

    return (
        <div
            className={`outer ${styles.headerOuter} ${bg === "transparent" ? styles.headerOuterTrans : ""}`}
            onClick={(ev) => {
                console.log("EV1", ev);
            }}
        >
            <div className={"inner " + styles.header}>
                <div className={styles.hLeft}>
                    <Link href="/">
                        <img src={"/icons/header/back.svg"} />
                    </Link>
                </div>
                <div
                    className={styles.hRight}
                    onClick={(ev) => {
                        console.log("EV2", ev);
                    }}
                >
                    <header>{title}</header>
                    <img
                        src={"/icons/header/star.svg"}
                        onClick={(ev) => {
                            console.log(ev);
                            set_show_services_menu((prev) => !prev);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

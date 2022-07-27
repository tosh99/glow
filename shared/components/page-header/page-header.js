import styles from "./page-header.module.scss";
import { Fragment, useState } from "react";
import Link from "next/link";
import Menu from "../menu/menu";
import { useRouter } from "next/router";
import ServicesMenu from "../services-menu/services-menu";

export default function PageHeader({ title, bg = "solid", onMenuClicked = () => {} }) {
    const [show_menu, set_show_menu] = useState(false);
    const [show_services_menu, set_show_services_menu] = useState(false);
    const router = useRouter();

    return (
        <Fragment>
            <div
                className={
                    "outer " + " " + styles.headerOuter + " " + (bg === "transparent" ? styles.headerOuterTrans : "")
                }
                onClick={(ev) => {

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

                        }}
                    >
                        <header>{title}</header>
                        <img
                            src={"/icons/header/star.svg"}
                            onClick={(ev) => {
                                if (router.pathname.includes("/services")) {
                                    set_show_services_menu((prev) => !prev);
                                } else {
                                    set_show_menu(true);
                                }

                                onMenuClicked();
                            }}
                        />
                    </div>
                </div>
            </div>
            {show_menu && (
                <Menu
                    close={() => {
                        set_show_menu(false);
                    }}
                />
            )}
            {show_services_menu && (
                <ServicesMenu
                    close={() => {
                        set_show_services_menu(false);
                    }}
                />
            )}
        </Fragment>
    );
}

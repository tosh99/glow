import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import styles from "./home-page-header.module.scss";
import {Fragment, useState} from "react";
import Link from "next/link";
import {constants} from "../../../styles/constants";
import Menu from "../menu/menu";

export default function HomePageHeader() {
    const [show_menu, set_show_menu] = useState(false)

    return (<Fragment>
        <div className={"outer " + ' ' + styles.headerOuter}>
            <div className={"inner " + styles.header}>
                <div className={styles.hLeft}>
                    <img src={'/icons/header/logo.svg'}/>
                </div>
                <div className={styles.hRight}>
                    <Link href='/services'>
                        <header>Services</header>
                    </Link>
                    <Link href="/products">
                        <header>Products</header>
                    </Link>
                    <Link href="/theedit">
                        <header>The Edit</header>
                    </Link>
                    <Link href="/biologique">
                        <header>Biologique Recherche</header>
                    </Link>
                    <Link href="/about">
                        <header>About</header>
                    </Link>
                    <p>make AN appointment</p>
                </div>
                <div className={styles.hRightMob}>
                    <img src={'/icons/header/star.svg'} onClick={() => {
                        set_show_menu(true)
                    }}/>
                </div>
            </div>
        </div>
        {
            show_menu &&
            <Menu close={() => {
                set_show_menu(false)
            }}/>
        }
    </Fragment>)
}
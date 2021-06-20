import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import styles from "./home-page-header.module.scss";
import {Fragment} from "react";
import Link from "next/link";

export default function HomePageHeader() {


    return (<Fragment>
        <div className={"outer " + ' ' + styles.headerOuter}>
            <div className={"inner " + styles.header}>
                <div className={styles.hLeft}>
                    <img src={'icons/header/logo.svg'}/>
                </div>
                <div className={styles.hRight}>
                    <Link href="services">
                        <header>Services</header>
                    </Link>
                    <Link href="products">
                        <header>Products</header>
                    </Link>
                    <header>The Edit</header>

                    <Link href="biologique">
                        <header>Biologique Recherche</header>
                    </Link>
                    <Link href="about">
                        <header>About</header>
                    </Link>
                    <p>make AN appointment</p>
                </div>
            </div>
        </div>
    </Fragment>)
}
import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import styles from "./menu.module.scss";
import {Fragment} from "react";
import Link from "next/link";
import {constants} from "../../../styles/constants";

export default function Menu({close}) {


    const getPageName = () => {

    }

    return (<Fragment>
        <div className={styles.menu}>
            <div className={styles.menuTop}>
                <img className={styles.logo} src={'/icons/header/logo.svg'}/>
                <img src={'/icons/header/close.svg'} onClick={close}/>
            </div>
            <div className={styles.menuContent}>
                <Link href="/services">
                    <header>Services</header>
                </Link>
                <Link href="/products">
                    <header>Products</header>
                </Link>
                <Link href="/products">
                    <header>The Edit</header>
                </Link>
                <Link href="/biologique">
                    <header>Biologique Recherche</header>
                </Link>
                <Link href="/about">
                    <header>About</header>
                </Link>
            </div>
            <div className={styles.menuBottom}>
                <p>make AN appointment</p>
            </div>
        </div>
    </Fragment>)
}
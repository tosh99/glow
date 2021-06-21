import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import styles from "./page-header.module.scss";
import {Fragment} from "react";
import Link from "next/link";
import {constants} from "../../../styles/constants";

export default function PageHeader({title, bg = 'solid'}) {


    return (<Fragment>
        <div className={"outer " + ' ' + styles.headerOuter + ' ' + (bg === 'transparent' ? styles.headerOuterTrans : '')}>
            <div className={"inner " + styles.header}>
                <Link href="/">
                    <div className={styles.hLeft}>
                        <img src={constants.assetPrefix + 'icons/header/back.svg'}/>
                    </div>
                </Link>
                <div className={styles.hRight}>
                    <Link href="about">
                        <header>{title}</header>
                    </Link>
                    <img src={constants.assetPrefix + 'icons/header/star.svg'}/>
                </div>
            </div>
        </div>
    </Fragment>)
}
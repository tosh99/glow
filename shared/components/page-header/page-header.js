import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import styles from "./page-header.module.scss";
import {Fragment, useState} from "react";
import Link from "next/link";
import {constants} from "../../../styles/constants";
import Menu from "../menu/menu";

export default function PageHeader({title, bg = 'solid'}) {
    const [show_menu, set_show_menu] = useState(false)


    return (<Fragment>
        <div className={"outer " + ' ' + styles.headerOuter + ' ' + (bg === 'transparent' ? styles.headerOuterTrans : '')}>
            <div className={"inner " + styles.header}>
                <Link href="/">
                    <div className={styles.hLeft}>
                        <img src={'/icons/header/back.svg'}/>
                    </div>
                </Link>
                <div className={styles.hRight}>
                    <header>{title}</header>
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
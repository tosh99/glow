import styles from "./page-header.module.scss";
import {Fragment, useState} from "react";
import Link from "next/link";
import Menu from "../menu/menu";

export default function PageHeader({title, bg = 'solid'}) {
    const [show_menu, set_show_menu] = useState(false)


    return (<Fragment>
        <div className={"outer " + ' ' + styles.headerOuter + ' ' + (bg === 'transparent' ? styles.headerOuterTrans : '')}>
            <div className={"inner " + styles.header}>
                <div className={styles.hLeft}>
                    <Link href="/">
                        <img src={'/icons/header/back.svg'}/>
                    </Link>
                </div>
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
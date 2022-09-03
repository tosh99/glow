import styles from "./home-page-header.module.scss";
import {Fragment, useState} from "react";
import Link from "next/link";
import Menu from "../menu/menu";

export default function HomePageHeader() {
    const [show_menu, set_show_menu] = useState(false)

    const bookNow = () => {
        // Router.push('/book-an-appointment')
        window.open('https://api.whatsapp.com/send?phone=9951355555')
    }

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
                    <p onClick={bookNow}>make AN appointment</p>
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

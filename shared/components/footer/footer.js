import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import styles from "./footer.module.scss";
import {Fragment} from "react";
import Router from "next/router";

export default function Footer() {


    return (<Fragment>
        <div className={"outer " + ' ' + styles.footerOuter}>
            <div className={"inner " + styles.footer}>
                <div className={styles.footerTop}>
                    <div className={styles.ftLeft}>
                        <img src={'/icons/header/logo_footer.svg'}/>
                    </div>
                    <div className={styles.ftRight}>
                        <div className={styles.column}>
                            <header className={styles.clHeader}>
                                Follow
                            </header>
                            <header className={styles.item}>Linkedin</header>
                            <header className={styles.item}>Instagram</header>
                        </div>
                        <div className={styles.column}>
                            <header className={styles.clHeader}>
                                Legal
                            </header>
                            <header className={styles.item}>Terms of Use</header>
                            <header className={styles.item}>Privacy Policy</header>
                            <header className={styles.item}>Services</header>
                        </div>
                        <div className={styles.column}>
                            <header className={styles.clHeader}>
                                Company
                            </header>
                            <header className={styles.item} onClick={() => {
                                Router.push('/faq')
                            }}>FAQs
                            </header>
                            <header className={styles.item} onClick={() => {
                                Router.push('/about')
                            }}>About
                            </header>
                            <header className={styles.item}>Blog</header>
                            <header className={styles.item} onClick={() => {
                                Router.push('/services')
                            }}>Services
                            </header>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div className={styles.fbLeft}>
                        <div className={styles.address}>
                            <header>info@glow.clinic</header>
                            <header>&nbsp;&nbsp;|&nbsp;&nbsp;</header>
                            <header>www.glow.shop</header>
                        </div>
                        <div className={styles.appoint}>
                            MAKE AN APPOINTMENT
                        </div>
                    </div>
                    <div className={styles.fbRight}>
                        <div className={styles.column}>
                            <header className={styles.clHeader}>
                                chennai
                            </header>
                            <header className={styles.item}>
                                3rd Floor, Door No. 3
                                Khader Nawaz Khan
                                Road
                            </header>
                            <header className={styles.item}>
                                +91 99513 55555
                                044 4553 5555
                            </header>
                        </div>
                        <div className={styles.column}>
                            <header className={styles.clHeader}>
                                Hyderabad
                            </header>
                            <header className={styles.item}>
                                1st & 2nd Floor, Plot No. 73
                                Vemireddy Enclave,
                                Road No. 12, Banjarahills
                            </header>
                            <header className={styles.item}>
                                +91 96772 92429
                                040 4850 5555
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={"outer " + ' ' + styles.footerBaseOuter}>
            <div className={"inner " + styles.footer}>
                <div className={styles.footerBase}>
                    <header>Language</header>
                    <header>Copyright &copy; 2021 All Rights Reserved</header>
                </div>
            </div>
        </div>


    </Fragment>)
}
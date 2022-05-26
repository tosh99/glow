import styles from "./footer.module.scss";
import {Fragment, useEffect, useState} from "react";
import Router from "next/router";

export default function Footer() {
    const [is_visible, set_is_visible] = useState({});

    useEffect(() => {
        if (screen.width > 648) {
            set_is_visible({
                follow: true,
                legal: true,
                company: true
            })
        }
    }, [])

    const backToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (<Fragment>
        <div className={"outer " + ' ' + styles.footerOuter}>
            <div className={"inner " + styles.footer}>
                <div className={styles.footerTop}>
                    <div className={styles.ftLeft}>
                        <img src={'/icons/header/logo_footer.svg'}/>
                        <section className={styles.backtoToTop + ' ' + styles.backtoToTopBlack} title={'Back To Top'}>
                            <header>Back to Top</header>
                            <img src={'/icons/header/backtotop_white.svg'} onClick={backToTop}/>
                        </section>
                        {/*<header onClick={backToTop}>Back to Top</header>*/}
                    </div>
                    <div className={styles.ftRight}>
                        <div className={styles.column}>
                            <div className={styles.clHeader} onClick={() => {
                                set_is_visible(prev => ({...prev, follow: !prev.follow}))
                            }}>
                                <header> Follow</header>
                                <img src={'/icons/common/down_white.svg'}/>
                            </div>
                            {
                                is_visible.follow && <>
                                    <a href="https://www.linkedin.com/company/glow-skin-beauty-wellness"
                                       target="_blank">
                                        <header className={styles.item}>Linkedin</header>
                                    </a>
                                    <a href="https://www.instagram.com/theglow.clinic" target="_blank">
                                        <header className={styles.item}>Instagram</header>
                                    </a>
                                </>
                            }
                        </div>
                        <div className={styles.column}>
                            <div className={styles.clHeader} onClick={() => {
                                set_is_visible(prev => ({...prev, legal: !prev.legal}))
                            }}>
                                <header> Legal</header>
                                <img src={'/icons/common/down_white.svg'}/>
                            </div>
                            {
                                is_visible.legal && <>
                                    <header className={styles.item}>Terms of Use</header>
                                    <header className={styles.item}>Privacy Policy</header>
                                </>
                            }
                        </div>
                        <div className={styles.column}>
                            <div className={styles.clHeader} onClick={() => {
                                set_is_visible(prev => ({...prev, company: !prev.company}))
                            }}>
                                <header> Company</header>
                                <img src={'/icons/common/down_white.svg'}/>
                            </div>
                            {
                                is_visible.company && <>
                                    <header className={styles.item} onClick={() => {
                                        Router.push('/faq')
                                    }}>FAQs
                                    </header>
                                    <header className={styles.item} onClick={() => {
                                        Router.push('/about')
                                    }}>About
                                    </header>
                                    <header className={styles.item} onClick={() => {
                                        Router.push('/tnc')
                                    }}>Terms and Conditions
                                    </header>
                                    <header className={styles.item} onClick={() => {
                                        Router.push('/privacy-policy')
                                    }}>Privacy Policy
                                    </header>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div className={styles.fbLeft}>
                        <div className={styles.address}>
                            <a href="mailto: info@glow.clinic">
                                <header>info@glow.clinic</header>
                            </a>
                            <header>&nbsp;&nbsp;|&nbsp;&nbsp;</header>
                            <a href="www.glow.shop">
                                <header>www.glow.shop</header>
                            </a>
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
                                <a href={"tel:+919951355555"}>
                                    +91 99513 55555
                                </a>
                                <a href={"tel:04445535555"}>
                                    044 4553 5555
                                </a>
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
                                <a href={"tel:+919677292429"}>
                                    +91 96772 92429
                                </a>
                                <a href={"tel:04048505555"}>
                                    040 4850 5555
                                </a>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={"outer " + ' ' + styles.footerBaseOuter}>
            <div className={"inner " + styles.footer}>
                <div className={styles.footerBase}>
                    <header>Copyright &copy; 2021 All Rights Reserved</header>
                </div>
            </div>
        </div>


    </Fragment>)
}

import styles from './styles/comingsoon.module.scss'
import {useEffect} from "react";
import PageHeader from "../shared/components/page-header/page-header";

export default function Home() {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [])

    return (
        <div className={styles.page}>
            <PageHeader title={'Services'} bg={'transparent'}/>
            <div className={"outer " + styles.banner}>
                <div className={"inner "}>
                    <img src={'/icons/header/logo.svg'}/>
                    <h1>Coming Soon!</h1>
                    <h2>Glow is a skincare wonderland with services designed for your upkeep and indulgence.
                        We are currently curating our services menu so do check back.</h2>
                    <a href={'https://wa.me/9951355555'} target={'_blank'}>
                        <button>MESSAGE US</button>
                    </a>
                </div>
            </div>
        </div>

    )
}

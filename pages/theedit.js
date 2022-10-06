import styles from './styles/comingsoon.module.scss'
import {useEffect} from "react";
import PageHeader from "../shared/components/page-header/page-header";

export default function Home() {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [])

    return (
        <div className={styles.page}>
            <PageHeader title={'The Edit'} bg={'transparent'}/>
            <div className={"outer " + styles.banner}>
                <div className={"inner " + styles.inner}>
                    <img src={'/icons/header/logo.svg'}/>
                    <h1>Coming Soon!</h1>
                    <h2>We are currently curating our Blogs to help you learn more about your skin and get started on
                        your skincare journey.
                    </h2>
                    {/*<h3>To see what services are available in our clinics in Hyderabad & Chennai, message us on WhatsApp to know more.</h3>*/}
                    {/*<div className={styles.address}>*/}
                    {/*    <a href={'https://wa.me/9951355555'} target={'_blank'}>*/}
                    {/*        <button>Glow Hyderabad</button>*/}
                    {/*    </a>*/}
                    {/*    <a href={'https://wa.me/9160655555'} target={'_blank'}>*/}
                    {/*        <button>Glow Chennai</button>*/}
                    {/*    </a>*/}
                    {/*</div>*/}

                </div>
            </div>
        </div>

    )
}

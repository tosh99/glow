import styles from "./index.module.scss";
import {Fragment} from "react";

export default function BackToTop({background = 'white'}) {
    const backToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (<Fragment>
        <div className={"outer"} style={{background: background}}>
            <div className={"inner " + styles.inner}>
                <section className={styles.backtoToTop} title={'Back To Top'}>
                    <header>Back to Top</header>
                    {
                        background === 'white' && <img src={'/icons/header/backtotop.svg'} onClick={backToTop}/>
                    }
                    {
                        background === 'black' && <img src={'/icons/header/backtotop_white.svg'} onClick={backToTop}/>
                    }
                </section>
            </div>
        </div>
    </Fragment>)
}
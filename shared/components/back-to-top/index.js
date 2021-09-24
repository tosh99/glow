import styles from "./index.module.scss";
import {Fragment} from "react";

export default function BackToTop({background = 'white'}) {
    const backToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (<Fragment>
        <div className={"outer"} style={{background: background}}>
            <div className={"inner"}>
                <section className={styles.backtoToTop} title={'Back To Top'}>
                    <img src={'/icons/header/backtotop.svg'} onClick={backToTop}/>
                </section>
            </div>
        </div>

    </Fragment>)
}
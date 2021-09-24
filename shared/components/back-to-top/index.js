import styles from "./index.module.scss";
import {Fragment} from "react";

export default function BackToTop() {
    const backToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (<Fragment>
        <div className={"outer"}>
            <div className={"inner"}>
                <section className={styles.backtoToTop}>
                    <img src={'/icons/header/backtotop.svg'} onClick={backToTop}/>
                </section>
            </div>
        </div>

    </Fragment>)
}
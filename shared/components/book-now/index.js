import styles from "./index.module.scss";
import {Fragment} from "react";
import Router from "next/router";

export default function BookNow() {
    const bookNow = () => {
        Router.push('/book-an-appointment')
    }


    return (<Fragment>
        <section className={styles.bookNow} title='Book Now' onClick={bookNow}>
            <header>Make An Appointment</header>
            <img src='/images/booknow/booknow.svg' onClick={bookNow}/>
        </section>

    </Fragment>)
}

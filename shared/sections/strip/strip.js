import styles from "./strip.module.scss";
import {useState} from "react";
import Marquee from "react-fast-marquee";


const items = [
    {
        title: 'Body'
    },
    {
        title: 'Hair'
    },
    {
        title: 'Wellness'
    },
    {
        title: 'Beauty'
    }
]


export default function Strip() {
    return <div className={"outer " + styles.stripOuter}>
        <div className={"inner " + styles.strips}>
            <Marquee gradient={false} speed={40} pauseOnHover={true} pauseOnClick={true}>
                {
                    items.map((item, index) => {
                        return <div className={styles.strip}>
                            <header> {item.title}</header>
                            <div className={styles.imgContainer}>
                                <img src={'/icons/common/star.svg'}/>
                            </div>
                        </div>
                    })
                }
            </Marquee>
        </div>
    </div>
}
import styles from './styles/index.module.scss'
import Link from 'next/link'

export default function Home() {
    return (
        <div className={"outer"}>
            <div className={"inner " + styles.skinCare}>
                <h1>The <br/> people-preferred <br/> skincare<br/> wonderland</h1>

                <div className={styles.img}>
                    <header>Read More</header>
                    <div>&nbsp;</div>
                </div>

                <p className={styles.desc}>Your skin changes with age, diet, weather, lifestyle choices and your state of mind. At every turning point, you need to check in with your skin.
                    At Glow, we don’t categorise you into a skin type. We consult with you to get to know your skin and then proceed with a personalised service.
                </p>

                <p className={styles.reju}>
                    Welcome to Glow, the skincare wonderland. Step in and tell us what you’d like to do today.
                </p>


            </div>
        </div>
    )
}

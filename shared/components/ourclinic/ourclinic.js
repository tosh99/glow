import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import styles from "./ourclinic.module.scss";
import {Fragment} from "react";

export default function Ourclinic() {


    return (<Fragment>
        <InView threshold={0.25} triggerOnce={true}>
            {
                ({ref, inView}) => (
                    <motion.div className={"outer " + ' ' + styles.visitUsOuter}
                                ref={ref}
                                initial={{opacity: 0}}
                                animate={inView ? {opacity: 1} : {opacity: 0}}
                                transition={{duration: 0.8}}>
                        <div className={"inner " + styles.visitUs}>
                            <div className={styles.vuHeader}>
                                <h2>Visit Us</h2>
                                <header>get direction</header>
                            </div>
                            <div className={styles.vuMap}>
                                <img src={'/images/home/hyderabad.png'}/>
                            </div>
                            <div className={styles.vuAddress}>
                                <div className={styles.vuaLeft}>
                                    <h3>Chennai </h3>
                                    <header>
                                        3rd Floor <br/>
                                        Door No. 3 <br/>
                                        Khader Nawaz Khan Road <br/>
                                        <br/>
                                        phone +91 99513 55555 <br/>
                                    </header>
                                </div>
                                <div className={styles.vuaRight}></div>
                            </div>
                        </div>
                    </motion.div>)
            }
        </InView>
    </Fragment>)
}
import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import styles from "./footer.module.scss";
import {Fragment} from "react";

export default function Footer() {


    return (<Fragment>
        <InView threshold={0.25} triggerOnce={true}>
            {
                ({ref, inView}) => (
                    <motion.div className={"outer " + ' ' + styles.footerOuter}
                                ref={ref}
                                initial={{opacity: 0}}
                                animate={inView ? {opacity: 1} : {opacity: 0}}
                                transition={{duration: 0.8}}>
                        <div className={"inner " + styles.footer}>


                        </div>
                    </motion.div>)
            }
        </InView>
    </Fragment>)
}
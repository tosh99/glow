import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import styles from "./ourclinic.module.scss";
import {Fragment, useEffect, useState} from "react";
import NextBack from "../../components/nextback/nextback";

const locations = [
    {
        title: 'Chennai',
        address: '3rd Floor Door No. 3 Khader Nawaz Khan Road',
        phone: '99513 55555'
    },
    {
        title: 'Hyderabad',
        address: '3rd Floor Door No. 2 Khader Nawaz Khan Road',
        phone: '99513 55555'
    }
]


export default function Ourclinic() {

    const clinic_slider_settings = {
        loop: true,
        center: true,
        nav: false,
        autoplayTimeout: 4500,
        autoplaySpeed: 1000,
        autoWidth: true,
        responsive: {
            0: {
                items: 1,
                autoWidth: false
            },
            768: {
                autoWidth: true
            },
        },
    }
    const [current_slide, set_current_slide] = useState(0);


    useEffect(() => {
        const owl = $('.address-carousel');
        owl.owlCarousel(clinic_slider_settings);

        owl.on('changed.owl.carousel', function (e) {
            set_current_slide(e.item.index - 3);
        })

        $('#ocPrevId').click(function () {
            owl.trigger('prev.owl.carousel');
        })

        $('#ocNextId').click(function () {
            owl.trigger('next.owl.carousel');
        })
    }, [])

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
                                <div className={"owl-carousel address-carousel"}>
                                    <div>
                                        <img src={'/images/home/hyderabad.png'}/>
                                    </div>
                                    <div>
                                        <img src={'/images/home/hyderabad.png'}/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.vuAddress}>
                                <div className={styles.vuaLeft}>
                                    <h3>{locations[current_slide].title} </h3>
                                    <header>
                                        {locations[current_slide].address}
                                        <br/><br/>
                                        phone +91 {locations[current_slide].phone}<br/>
                                    </header>
                                </div>
                                <div className={styles.vuaRight}>
                                    <NextBack theme={'light'} prevId={'ocPrevId'} nextId={'ocNextId'}/>
                                </div>
                            </div>
                        </div>
                    </motion.div>)
            }
        </InView>
    </Fragment>)
}
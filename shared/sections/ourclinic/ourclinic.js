import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import styles from "./ourclinic.module.scss";
import {Fragment, useEffect, useState} from "react";
import NextBack from "../../components/nextback/nextback";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, Navigation, Pagination} from 'swiper/core';

SwiperCore.use([Autoplay, Pagination, Navigation]);

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

    const [clinic_swiper, set_clinic_swiper] = useState({});

    const [current_slide, set_current_slide] = useState(0);


    useEffect(() => {

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
                                <Swiper slidesPerView={1}
                                        autoplay={{
                                            delay: 2500,
                                        }}
                                        onInit={(ev) => {
                                            set_clinic_swiper(ev)
                                        }}
                                        onSlideChange={(ev) => {
                                            console.log(ev.activeIndex)
                                            set_current_slide(ev.activeIndex)
                                        }}>
                                    <SwiperSlide>
                                        <div>
                                            <img src={'/images/home/hyderabad.png'}/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <img src={'/images/home/hyderabad.png'}/>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
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
                                    <NextBack theme={'light'} onBack={() => {
                                        clinic_swiper.slidePrev()
                                    }} onNext={() => {
                                        clinic_swiper.slideNext()
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </motion.div>)
            }
        </InView>
    </Fragment>)
}
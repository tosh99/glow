import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import styles from "./visitus.module.scss";
import {Fragment, useEffect, useState} from "react";
import NextBack from "../../components/nextback/nextback";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, Navigation, Pagination} from 'swiper/core';
import Dots from "../../components/dots";

SwiperCore.use([Autoplay, Pagination, Navigation]);


const locations = [
    {
        title: 'Hyderabad',
        address: '1st & 2nd Floor, Plot No. 73,<br> Vemireddy Enclave,Road No. 12,<br> Banjarahills',
        phone: ['+91 96772 92429', '04048505555'],
        link: 'https://www.google.com/maps/place/Glow+-+Skin+%7C+Beauty+%7C+Wellness/@17.4400203,78.3947969,12z/data=!4m9!1m2!2m1!1sglow+clinic+hyderabad!3m5!1s0x3bcb973c9c19eee9:0x9db4ce07389c05a8!8m2!3d17.4077161!4d78.4429068!15sChVnbG93IGNsaW5pYyBoeWRlcmFiYWSSARBza2luX2NhcmVfY2xpbmlj'
    },
    {
        title: 'Chennai',
        address: '3rd Floor, Door No. 3, <br> Khader Nawaz Khan Road',
        phone: ['+91 99513 55555', '044 4553 5555'],
        link: 'https://www.google.com/maps/place/Glow+-+Skin+%7C+Beauty+%7C+Wellness/@12.9749069,80.1315287,12z/data=!4m9!1m2!2m1!1sglow+clinic+chennai!3m5!1s0x3a52672c0d216887:0xe945533f4203fde4!8m2!3d13.0608313!4d80.2513894!15sChNnbG93IGNsaW5pYyBjaGVubmFpWhUiE2dsb3cgY2xpbmljIGNoZW5uYWmSARBza2luX2NhcmVfY2xpbmljmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5oYkc5cE1XSkJFQUU',
    },
]

export default function Visitus() {
    const [clinic_swiper, set_clinic_swiper] = useState({});
    const [current_slide, set_current_slide] = useState(0);

    const goToAddress = () => {
        window.open(locations[current_slide].link);
    }

    const [device, set_device] = useState(2);
    useEffect(() => {
        if (screen.width <= 648) {
            set_device(0)
        }

        window.scrollTo({top: 0, behavior: 'smooth'});
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

                        <div className={"inner " + styles.visitUs} id={'visitus'}>
                            <div className={styles.vuHeader}>
                                <h2>Visit Us</h2>
                                <header onClick={goToAddress}>get direction</header>
                            </div>
                            <div className={styles.vuMap}>
                                <Swiper slidesPerView={1}
                                        speed={1800}
                                        onInit={(ev) => {
                                            set_clinic_swiper(ev)
                                        }}
                                        onSlideChange={(ev) => {
                                            set_current_slide(ev.activeIndex)
                                        }}>
                                    <SwiperSlide>
                                        <div onClick={goToAddress}>
                                            <img className={styles.imgDesktop} src={'/images/locations/chennai.png'}/>
                                            <img className={styles.imgMob}
                                                 src={'/images/locations/chennai_mobile.png'}/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div onClick={goToAddress}>
                                            <img className={styles.imgDesktop} src={'/images/locations/hyderabad.png'}/>
                                            <img className={styles.imgMob}
                                                 src={'/images/locations/hyderabad_mobile.png'}/>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className={styles.vuAddress}>
                                <div className={styles.vuaLeft}>
                                    <h3>{locations[current_slide].title} </h3>
                                    <header>
                                        <span dangerouslySetInnerHTML={{__html: locations[current_slide].address}}/>
                                        <br/><br/>
                                        {locations[current_slide].phone.map((item, index) => {
                                            return <a href={"tel:" + item}>
                                                <header className={styles.phone}>{item}</header>
                                                <br/>
                                            </a>
                                        })}<br/>
                                    </header>
                                </div>
                                <div className={styles.vuaRight}>
                                    <div className={styles.dts}>
                                        <Dots count={2} selected={current_slide} selectedColor={'white'}
                                              bgColor={'#D3D3D37F'}/>
                                    </div>
                                    <NextBack
                                        theme={'light'}
                                        prevDisabled={current_slide === 0}
                                        nextDisabled={current_slide === 1}
                                        onBack={() => {
                                            clinic_swiper.slidePrev()
                                        }}
                                        onNext={() => {
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

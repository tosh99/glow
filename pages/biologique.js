import {Fragment, useEffect, useState} from "react";
import styles from "./styles/biologue.module.scss";
import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import PageHeader from "../shared/components/page-header/page-header";
import NextBack from "../shared/components/nextback/nextback";
import Head from "next/head";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, Controller, Navigation, Pagination} from 'swiper/core';
import Footer from "../shared/components/footer/footer";
import ReadMoreReact from 'read-more-react';

SwiperCore.use([Autoplay, Pagination, Navigation, Controller]);

const methodologies = [
    {
        title: 'ASSESSMENT STAGE',
        desc: 'The Biologique Recherche Expert conducts a thorough dermo-cosmetic diagnosis to determine your skin instant. This diagnosis is carried out using the Skin Instant© Lab system and includes a visual analysis, a questionnaire, and the taking of measurements, to allow a treatment protocol to be devised that precisely matches your needs. The sophisticated technique of VisioLab© gives even more finely tuned results, thanks to a high definition image and scientific analysis of your face. Their latest addition to technological assessment systems is  \n' +
            'My Beauty DNA, which analyses your skin for 14 markers relating to ageing, sensitivity to sunlight and environmental factors, and your cutaneous profile, giving an overview of your genetic predisposition.\n' +
            '\n' +
            'Glow is the first space in India to offer these high-tech skin analysis systems.\n'
    },
    {
        title: 'Initialisation Stage',
        desc: 'This is followed by personalised cleansing and balancing of your epidermis to prepare it for the next stage. Your face is cleansed gently while massaging it and then prepping it using the iconic Lotion P50 and a face mask.'
    },
    {
        title: '3rd Stage',
        desc: 'This stage incorporates products with the highest concentration of active ingredients, to recondition the epidermis and help enhance its potential for self-regeneration. When they’re applied in line with the Biologique Recherche methodology, they balance, hydrate and revitalise the epidermis as required by each Skin Instant©. The active ingredients take effect gradually, skin quality improves, and the complexion becomes radiant.'
    }
]
const buy_br = [
    {
        title: 'For Face',
        img_url: 'face.png',
        img_mobile_url: 'face_mobile.png'
    },
    {
        title: 'For Hair',
        img_url: 'hair.png',
        img_mobile_url: 'hair_mobile.png'
    },
    {
        title: 'Initialisation Stage',
        img_url: '3.png',
        img_mobile_url: '3_mobile.png'
    }
];
const carousel_content = [
    {
        title: 'For bODY',
        content: 'Biologique Recherche body treatments are tailored to your needs for a relaxing massage or body sculpting using high-tech tools.',
        imgurl: 'body.png'
    },
    {
        title: 'FOR FACE',
        content: 'Biologique Recherche facials are hyper personalised and devised for that forever glow and a sculpted visage.',
        imgurl: 'face.png'
    },
    {
        title: 'FOR SCALP',
        content: 'Biologique Recherche procedures for the scalp are highly effective for rejuvenated hair that is shiny and strong, and a healthy scalp.',
        imgurl: 'scalp.png'
    },
];

const content = 'Biologique Recherche products have been accredited for their effectiveness and, immediate and lasting results. The Biologique Recherche methodology is based on targeted products with a high concentration of active\n' +
    '                        ingredients. Their products are formulated in a dedicated research and development lab using plant, biomarine and biotechnological extracts at very high concentrations – above 20% in most products. These extracts are\n' +
    '                        derived using the cold pressed method which adds to their potency. Additionally, the entire range of Biologique Recherche products is fragrance free so as to not sensitise your skin.\n' +
    '                        Invest in a highly personalised and effective skincare regime with the assistance of our Skin Experts at Glow.'

export default function Biologique() {
    const [current_slide, set_current_slide] = useState(0);
    const [slider, set_slider] = useState({});

    const [device, set_device] = useState(2);

    useEffect(() => {
        if (screen.width <= 648) {
            set_device(0)
        }
    }, [])


    return (<Fragment>
        <Head>
            <title>Biologique Recherche x Glow</title>
        </Head>
        <PageHeader title={'Biologique Recherche'}/>

        <div className={"outer " + styles.skinCareOuter}>
            <div className={"inner " + styles.skinCare}>
                <h1>Biologique Recherche x Glow</h1>
                <div className={styles.img}>
                    <div className={styles.imgLeft}>
                        <p>One of our goals at Glow is to associate with brands that identify with our ideology of clean, targeted and result-oriented skincare therapies. We are proud to have partnered with Biologique Recherche — the
                            leading dermo-cosmetic skincare brand born in Paris, France and reputed across the globe for their technologically advanced approach to skincare.
                        </p>
                    </div>
                    <div className={styles.imgRight}>
                        <div>
                            <img src={'/images/biologue/banner.png'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className={"outer " + styles.shopMyShelfieOuter}>
            <div className={"inner " + styles.shopMyShelfie}>
                <div className={styles.smLeft}>
                    <h2>The Birth of <br/> Hyper-Personalisation</h2>
                </div>
                <div className={styles.smRight}>
                    <p> Founded in the late 1970s by a family of artisanal skincare experts, Biologique Recherche came about through the passion of biologist and physiotherapist duo Yvan and Josette Allouche.
                        Their consummate savoir-faire and visionary approach underpin the brand’s reputation for effectiveness and outstanding products.
                    </p>
                    <p>
                        In 1992 Biologique Recherche set up its Ambasade in the heart of Paris, on the historic Champs Elysées. Even after all these years they stay true to their personalised methodology and products while preserving the
                        authenticity and continuing to innovate so that their clients can enjoy an ever-more customised experience
                    </p>
                </div>

            </div>
        </div>


        {/*Three Stage*/}
        <div className={"outer " + styles.threeStageOuter}>
            <div className={styles.threeStage}>
                <header>03</header>
                <h1>Stage Methodology</h1>
            </div>
        </div>
        <div className={"outer " + styles.methodologyOuter}>
            <Swiper
                slidesPerView={1}
                spaceBetween={50}
                loop={true}>
                {
                    methodologies.map((item, index) => {
                        return (<SwiperSlide>
                                <div className={styles.methodology}>
                                    <div className={styles.metLeft}>
                                        <header>Step - 0{index + 1}</header>
                                        <h2>{item.title}</h2>
                                        {/*<p>{item.desc}</p>*/}

                                        <div className={styles.desc}>
                                            <ReadMoreReact min={150} ideal={220} max={250} text={item.desc}/>
                                        </div>
                                    </div>
                                    <div className={styles.metRight}>
                                        <img src={'/images/biologue/methodology/' + (index + 1) + '.png'}/>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>


        <div className={styles.slidersOuter}>
            <div className={styles.sliders}>
                <div className={styles.contentDesc}>
                    <p className={styles.title}>
                        Their most sought
                        after aesthetic services, exclusively at Glow
                    </p>
                    <div className={styles.desc}>
                        <p>Glow is the first dermatological centre to offer the entire Biological Recherche menu that is only available in their Ambassade in Paris.</p>
                        <p>Each skincare protocol is devised specifically in response to a personalised dermo-cosmetic diagnosis. All Biologique
                            Recherche’s personalised treatments – whether for the face, body or scalp – are executed with the
                            same rigor and methodology. Get these critically acclaimed services at our clinics in Hyderabad and Chennai, now.</p>
                    </div>
                </div>

                <Swiper slidesPerView={'auto'}
                        centeredSlides={true}
                        loop={true}
                        spaceBetween={100}
                        onInit={(ev) => {
                            set_slider(ev)
                        }}
                        onSlideChange={(ev) => {
                            if (ev.activeIndex === 6) {
                                set_current_slide(0)
                            } else if (ev.activeIndex - 3 === -1) {
                                set_current_slide(2)
                            } else {
                                set_current_slide(ev.activeIndex - 3)
                            }

                        }}>
                    {
                        carousel_content.map((item, index) => {
                            return (<SwiperSlide>
                                    <div className={styles.slide}>
                                        {
                                            current_slide === index &&
                                            <InView threshold={0}>
                                                {
                                                    ({ref, inView}) => (
                                                        <motion.div className={styles.title}
                                                                    ref={ref}
                                                                    initial={{opacity: 0}}
                                                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                                                    transition={{duration: 0.7}}>
                                                            {item.title}
                                                        </motion.div>)
                                                }
                                            </InView>
                                        }
                                        <img
                                            className={
                                                "grayscale " + styles.bannerImg + ' '
                                                + (current_slide === index ? styles.banner : '') + ' '
                                                + (
                                                    ((current_slide > 0 && index >= current_slide) || (current_slide === 0 && index !== carousel_content.length - 1) || (current_slide === carousel_content.length - 1 && index === 0)) ?
                                                        '' : styles.prevImg)
                                            }
                                            src={'/images/biologue/services/' + item.imgurl}
                                        />
                                        {
                                            ((current_slide > 0 && index >= current_slide) || (current_slide === 0 && index !== carousel_content.length - 1) || (current_slide === carousel_content.length - 1 && index === 0)) ?
                                                <div className={styles.content}>
                                                    <section>
                                                        <h3>0{index + 1} / <span>0{carousel_content.length}</span></h3>
                                                        {
                                                            device === 0 &&
                                                            <NextBack
                                                                theme={'light'}
                                                                onNext={() => {
                                                                    slider.slideNext()
                                                                }}
                                                                onBack={() => {
                                                                    slider.slidePrev()
                                                                }}/>
                                                        }

                                                    </section>
                                                    <p>
                                                        <ReadMoreReact min={65} ideal={105} max={165} text={item.content}/>
                                                    </p>
                                                    {
                                                        device === 0 && <InView threshold={0}>
                                                            {
                                                                ({ref, inView}) => (
                                                                    <motion.div className={styles.titleM}
                                                                                ref={ref}
                                                                                initial={{opacity: 0}}
                                                                                animate={inView ? {opacity: 1} : {opacity: 0}}
                                                                                transition={{duration: 0.7}}>
                                                                        {item.title}
                                                                    </motion.div>)
                                                            }
                                                        </InView>
                                                    }
                                                    {
                                                        device !== 0 && <NextBack
                                                            theme={'light'}
                                                            onNext={() => {
                                                                slider.slideNext()
                                                            }}
                                                            onBack={() => {
                                                                slider.slidePrev()
                                                            }}/>
                                                    }
                                                </div> : <div>&nbsp;</div>
                                        }
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>


        <div className={"outer " + styles.currentFavouritesOuter}>
            <div className={"inner " + styles.currentFavourites}>
                <div className={styles.cfHeader}>
                    <p className={styles.title}>
                        Buy Biologique Recherche
                    </p>
                    <p className={styles.desc}>
                        {
                            device === 0 ? <ReadMoreReact
                                min={65}
                                ideal={355}
                                max={655}
                                text={content}/> : content
                        }
                    </p>
                </div>

                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={20}
                    loop={true}>
                    {
                        buy_br.map((item, index) => {
                            return (<SwiperSlide>
                                    <div className={styles.buyBr}>
                                        <header>{item.title}</header>
                                        <img src={'/images/biologue/buy/' + (device === 0 ? item.img_mobile_url : item.img_url)}/>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

                <header className={styles.enquire}>ENQUIRE</header>
            </div>
        </div>

        <Footer/>

    </Fragment>)
}
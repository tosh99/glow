import {Fragment, useEffect, useState} from "react";
import styles from "./styles/biologue.module.scss";
import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import PageHeader from "../shared/components/page-header/page-header";
import Slider from "react-slick";
import NextBack from "../shared/components/nextback/nextback";
import Head from "next/head";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, Controller, Navigation, Pagination} from 'swiper/core';
import Footer from "../shared/components/footer/footer";

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
        title: 'Initialisation Stage',
        desc: 'This is followed by personalised cleansing and balancing of your epidermis to prepare it for the next stage. Your face is cleansed gently while massaging it and then prepping it using the iconic Lotion P50 and a face mask.'
    }
]
const buy_br = [
    {
        title: 'For Face',
        img_url: 'face.png'
    },
    {
        title: 'For Hair',
        img_url: 'hair.png'
    },
    {
        title: 'Initialisation Stage',
        img_url: 'hair.png'
    }
]

export default function Biologique() {
    const [current_slide, set_current_slide] = useState(0);
    const [slider, setslider] = useState({});
    const carousel_content = [
        {
            title: 'Body',
            content: 'A range of hand-picked brands for the best of body care products that are made with clean, active ingredients and are result-driven. Taking care of your body is equally rewarding.'
        },
        {
            title: 'Hair',
            content: 'Give your hair care routine a bump onto the next level. Whether it is finding the right products for your hair type and concern or adding some lovely serums for that extra bounce, we’ve curated an array of products for each and every one of your needs.'
        },
        {
            title: 'Skincare',
            content: 'Whether you’re a beginner or a skincare enthusiast, we have something for you all. Choose from our repertoire of curated skincare products that have acquired a cult status for their new-age formulations and are targeted towards lasting skincare benefits. A healthy glow awaits you.'
        },
        {
            title: 'Supplements',
            content: 'At Glow, we promote overall well-being for healthy skin and hair. Find supplements that come recommended for a glow that’s from within.'
        },
        {
            title: 'Tools',
            content: 'For at-home facials and upkeep, we have a range of some of the most innovative technology that will work on a deeper level for that glow from within. Prep, prime and polish your skin with these must-try tools. Starting from easy-to-use to high-tech devices, we have a variety of tools that will enhance your at home beauty regime.'
        }
    ];



    const sl = {
        loop: true,
        center: true,
        autoplay: true,
        nav: false,
        autoplayTimeout: 2500,
        autoplaySpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
            },
        }
    }
    const [favorite_slider, set_favorite_slider] = useState({});
    const favorite_products = [
        {
            title: 'Lotion P50 BR',
        },
        {
            title: 'Warming Honey Cleanser',
        },
        {
            title: 'Mitti raw face mask pureearth',
        },
        {
            title: 'Pro heal serum is clinical',
        },
        {
            title: 'Oligo proteins marines serum',
        },
        {
            title: 'Lait vip 02',
        },
        {
            title: 'Heliocare mineral tolerance fluid',
        },
        {
            title: 'Biokiss lip balm',
        },
        {
            title: 'Creme aux acid de fruits',
        },
        {
            title: 'Masque vip 02',
        },
    ];


    return (<Fragment>
        <Head>
            <title>Products</title>
            {/*<script src={`https://code.jquery.com/jquery-3.2.1.slim.min.js`}/>*/}
            {/*<script src={`https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js`}/>*/}
            {/*<script dangerouslySetInnerHTML={{*/}
            {/*    __html: `*/}
            {/*        $(document).ready(function(){*/}
            {/*            var owl = $('.owl-carousel');*/}
            {/*            const settings = {*/}
            {/*                loop: true,*/}
            {/*                center: true,*/}
            {/*                autoplay: true,*/}
            {/*                nav: false,*/}
            {/*                autoplayTimeout: 2500,*/}
            {/*                autoplaySpeed: 1000,*/}
            {/*                responsive: {*/}
            {/*                    0: {*/}
            {/*                        items: 1,*/}
            {/*                    },*/}
            {/*                    600: {*/}
            {/*                        items: 2,*/}
            {/*                    },*/}
            {/*                    1000: {*/}
            {/*                        items: 3,*/}
            {/*                    }*/}
            {/*                }*/}
            {/*            }*/}
            {/*            */}
            {/*            owl.owlCarousel(settings);*/}
            {/*            */}
            {/*            $('#cfPrevId').click(function() {*/}
            {/*                owl.trigger('prev.owl.carousel');*/}
            {/*            })*/}
            {/*            */}
            {/*            $('#cfNextId').click(function() {*/}
            {/*                owl.trigger('next.owl.carousel');*/}
            {/*            })*/}
            {/*            */}
            {/*        });*/}
            {/*        */}
            {/*    `,*/}
            {/*}}>*/}
            {/*</script>*/}
        </Head>
        <PageHeader title={'Biologique Recherche'}/>

        <div className={"outer " + styles.skinCareOuter}>
            <div className={"inner " + styles.skinCare}>
                <h1>Dr. Varshini Reddy- Biologique Recherche Skincare Expert</h1>
                <div className={styles.img}>
                    <div className={styles.imgLeft}>
                        <p>Your skin changes with age, diet, weather, lifestyle choices and your state of mind. At every turning point, you need to check in with your skin.
                            At Glow, we don’t categorise you into a skin type. We consult with you to get to know your skin and then proceed with a personalised service.
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

        <div className={"outer " + styles.threeStageOuter}>
            <div className={styles.threeStage}>
                <header>03</header>
                <h1>Stage Methodology</h1>
            </div>
        </div>

        <div className={"outer " + styles.methodologyOuter}>
            <Swiper slidesPerView={1} autoplay={{
                delay: 2222500,
            }} loop={true}>
                {
                    methodologies.map((item, index) => {
                        return (<SwiperSlide>
                                <div className={styles.methodology}>
                                    <div className={styles.metLeft}>
                                        <header>Step - 0{index + 1}</header>
                                        <h2>{item.title}</h2>
                                        <p>{item.desc}</p>
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
                <div className={styles.content}>
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

                <Swiper slidesPerView={'auto'} autoplay={{
                    delay: 2500,
                }} centeredSlides={true} loop={true} onSlideChange={(ev) => {
                    if (ev.activeIndex - 5 === 5) {
                        set_current_slide(0)
                    } else {
                        set_current_slide(ev.activeIndex - 5)
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
                                        <img className={"gr " + (current_slide === index ? styles.banner : '')} src={'/images/home/sliders/' + (index) + '.png'}/>
                                        <div>
                                            <h3>0{index + 1} / <span>0{carousel_content.length}</span></h3>
                                            <p>{item.content}</p>
                                            <InView threshold={0}>
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
                                            <NextBack theme={'light'}/>
                                        </div>
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
                        Biologique Recherche products have been accredited for their effectiveness and, immediate and lasting results. The Biologique Recherche methodology is based on targeted products with a high concentration of active
                        ingredients. Their products are formulated in a dedicated research and development lab using plant, biomarine and biotechnological extracts at very high concentrations – above 20% in most products. These extracts are
                        derived using the cold pressed method which adds to their potency. Additionally, the entire range of Biologique Recherche products is fragrance free so as to not sensitise your skin.
                        Invest in a highly personalised and effective skincare regime with the assistance of our Skin Experts at Glow.

                    </p>
                </div>

                <Swiper slidesPerView={'auto'} autoplay={{
                    delay: 2500,
                }} loop={true}>
                    {
                        buy_br.map((item, index) => {
                            return (<SwiperSlide>
                                    <div className={styles.buyBr}>
                                        <header>{item.title}</header>
                                        <img src={'/images/biologue/buy/' + item.img_url}/>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>

        <Footer/>

    </Fragment>)
}
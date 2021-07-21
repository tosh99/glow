import {Fragment, useEffect, useState} from "react";
import styles from "./styles/biologue.module.scss";
import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import Ourclinic from "../shared/components/ourclinic/ourclinic";
import {constants} from "../styles/constants";
import PageHeader from "../shared/components/page-header/page-header";
import Slider from "react-slick";
import NextBack from "../shared/components/nextback/nextback";
import Head from "next/head";

export default function Biologique() {
    const settings = {
        dots: true,
        speed: 2250,
        centerMode: true,
        adaptiveHeight: true,
        variableWidth: true,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 4000,
        beforeChange: (current, next) => {
            set_current_slide(next)
        },
    };
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


    const favorite_slider_settings = {
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
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    };
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

    useEffect(() => {
        const owl = $('.owl-carousel');
        owl.owlCarousel(favorite_slider_settings);

        $('#cfPrevId').click(function () {
            owl.trigger('prev.owl.carousel');
        })

        $('#cfNextId').click(function () {
            owl.trigger('next.owl.carousel');
        })

    }, [])


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


                <Slider ref={slider => {
                    setslider(slider)
                }} {...settings}>
                    {
                        carousel_content.map((item, index) => {
                            return (<Fragment>
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

                                    <img className={"gr " + (current_slide === index ? styles.banner : '')} src={'/images/home/slider-' + (index + 1) + '.png'}/>
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
                                        <NextBack theme={'light'} onBack={slider.slickPrev} onNext={slider.slickNext}/>
                                    </div>
                                </div>

                            </Fragment>)
                        })
                    }
                </Slider>
            </div>
        </div>


        <div className={"outer " + styles.currentFavouritesOuter}>
            <div className={"inner " + styles.currentFavourites}>
                <div className={styles.cfHeader}>
                    <p className={styles.title}>
                        Buy
                        Biologique Recherche
                    </p>
                    <p className={styles.desc}>
                        Biologique Recherche products have been accredited for their effectiveness and, immediate and lasting results. The Biologique Recherche methodology is based on targeted products with a high concentration of active
                        ingredients. Their products are formulated in a dedicated research and development lab using plant, biomarine and biotechnological extracts at very high concentrations – above 20% in most products. These extracts are
                        derived using the cold pressed method which adds to their potency. Additionally, the entire range of Biologique Recherche products is fragrance free so as to not sensitise your skin.
                        Invest in a highly personalised and effective skincare regime with the assistance of our Skin Experts at Glow.

                    </p>

                </div>

                <div className={"owl-carousel"}>
                    {
                        favorite_products.map((item, index) => {
                            return (<Fragment>
                                <div className={styles.cfSlide}>
                                    <img src={'/images/products/fav/' + (index) + '.png'}/>
                                    <header>{item.title}</header>
                                </div>
                            </Fragment>)
                        })
                    }
                </div>
            </div>
        </div>


    </Fragment>)
}
import styles from './styles/products.module.scss'
import Link from 'next/link'
import {Fragment, useEffect, useState} from "react";
import Slider from "react-slick";
import {motion} from "framer-motion"
import {InView, useInView} from 'react-intersection-observer';

export default function Products() {
    const body_slider_settings = {
        dots: false,
        speed: 1250,
        arrows: false,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        adaptiveHeight: true,
        beforeChange: (current, next) => {
            set_current_body_slide(next)
        },
    };
    const [current_body_slide, set_current_body_slide] = useState(0);
    const [body_slider, set_body_slider] = useState();

    const favorite_slider_settings = {
        dots: false,
        speed: 1250,
        centerMode: true,
        adaptiveHeight: true,
        variableWidth: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    const [favorite_slider, set_favorite_slider] = useState();

    const products_alternate_settings = {
        dots: true,
        speed: 1250,
        centerMode: true,
        adaptiveHeight: true,
        variableWidth: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        beforeChange: (current, next) => {
            set_current_products_alternate_slide(next)
        },
    };
    const [products_alternate_slider, set_products_alternate_slider] = useState();
    const [current_products_alternate_slide, set_current_products_alternate_slide] = useState();
    const products_alternate_content = [
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


    const rtl = [
        {
            title: 'Good for <br/>' + 'Glow',
            desc: 'A range of hand-picked brands for the best of body care products that are made with clean, active ingredients and are result-driven. Taking care of your body is equally rewarding.',
            shop: 'Body',
        },
        {
            title: 'Get set <br/>' + 'Glow',
            desc: 'A range of hand-picked brands for the best of body care products that are made with clean, active ingredients and are result-driven. Taking care of your body is equally rewarding.',
            shop: 'Body',
        },
        {
            title: 'You <br/>' + 'Glow',
            desc: 'A range of hand-picked brands for the best of body care products that are made with clean, active ingredients and are result-driven. Taking care of your body is equally rewarding.',
            shop: 'Body',
        },
        {
            title: 'Glow From <br/>' + 'Within',
            desc: 'A range of hand-picked brands for the best of body care products that are made with clean, active ingredients and are result-driven. Taking care of your body is equally rewarding.',
            shop: 'Body',
        },
        {
            title: 'At home <br/>' + 'Glow',
            desc: 'A range of hand-picked brands for the best of body care products that are made with clean, active ingredients and are result-driven. Taking care of your body is equally rewarding.',
            shop: 'Body',
        },
    ];

    const favorite_products = [
        {
            title: 'Lotion P50 BR',
        },
        {
            title: 'Lotion P50 BR',
        },
        {
            title: 'Lotion P50 BR',
        },
        {
            title: 'Lotion P50 BR',
        },
        {
            title: 'Lotion P50 BR',
        },
        {
            title: 'Lotion P50 BR',
        },
        {
            title: 'Lotion P50 BR',
        },
        {
            title: 'Lotion P50 BR',
        },


    ];


    return (<Fragment>
        <div className={"outer " + styles.bodyOuter}>
            <div className={"inner " + styles.body}>
                <div className={styles.bLeft}>
                    <div>
                        <h1 dangerouslySetInnerHTML={{__html: rtl[current_body_slide].title}}/>
                        <p>{rtl[current_body_slide].desc}</p>
                    </div>
                    <header>Shop {rtl[current_body_slide].shop}</header>
                </div>
                <div className={styles.bRight}>
                    <Slider ref={slider => {
                        set_body_slider(slider)
                    }} {...body_slider_settings}>
                        {
                            rtl.map((item, index) => {
                                return (<Fragment>
                                    <div className={styles.slide}>
                                        <img src={'images/products/top/' + (index) + '.png'}/>
                                    </div>
                                </Fragment>)
                            })
                        }
                    </Slider>
                    <div>
                        <div>
                            <img src={'icons/back.svg'} onClick={() => {
                                body_slider.slickPrev()
                            }}/>
                            <img src={'icons/forward.svg'} onClick={() => {
                                body_slider.slickNext()
                            }}/>
                        </div>
                    </div>

                </div>

            </div>
        </div>

        <div className={"outer " + styles.productDescOuter}>
            <div className={"inner " + styles.productDesc}>
                <p>After a lot of deliberation we have curated a wide range of products that are available to you 24 x 7 on our
                    online boutique glow.shop. You can also purchase them in-store with the assistance of our skincare experts or
                    even place an order for curbside pick-up. These products are tried and tested cult favourites and made with
                    innovative formulations to offer you an everlasting glow and help you on your skincare, beauty and wellness
                    journey
                </p>
            </div>
        </div>

        <div className={"outer " + styles.currentFavouritesOuter}>
            <div className={"inner " + styles.currentFavourites}>
                <div className={styles.cfHeader}>
                    <h2>Varshini's Current Favourites</h2>
                    <div></div>
                </div>

                <Slider ref={slider => {
                    set_favorite_slider(slider)
                }} {...favorite_slider_settings}>
                    {
                        favorite_products.map((item, index) => {
                            return (<Fragment>
                                <div className={styles.cfSlide}>
                                    <img src={'images/products/fav/' + (index) + '.png'}/>
                                </div>
                            </Fragment>)
                        })
                    }
                </Slider>
            </div>
        </div>

        <div className={"outer " + styles.shopMyShelfieOuter}>
            <div className={"inner " + styles.shopMyShelfie}>
                <div className={styles.smLeft}>
                    <h2>Shop my shelfie</h2>
                </div>
                <div className={styles.smRight}>
                    <p> Being a skincare enthusiast myself, I am always on the lookout for new products to add to my repertoire.
                        These are a few of my current favourites, some of which are staples in my routine and some new ones you would
                        be happy to discover. Shop these curated products and refresh your skincare shelf.
                    </p>
                    <header>glow.shop</header>
                </div>

            </div>
        </div>

        <div className={styles.slidersOuter}>
            <div className={styles.sliders}>
                <p className={styles.desc}>
                    After a lot of deliberation we have curated a
                    wide range of products that are available to you 24 x 7 on our online boutique glow.shop. You can also purchase them in-store with the assistance of our skincare experts or
                    even place an order for curbside pick-up. These products are tried and tested cult favourites and made
                    with innovative formulations to offer you an everlasting glow and help you on your skincare, beauty and wellness
                    journey.
                </p>

                <Slider ref={slider => {
                    set_products_alternate_slider(slider)
                }} {...products_alternate_settings}>
                    {
                        products_alternate_content.map((item, index) => {
                            return (<Fragment>
                                <div className={styles.slide}>
                                    {
                                        current_products_alternate_slide === index &&
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

                                    <img className={"gr " + (current_products_alternate_slide === index ? styles.banner : '')} src={'images/home/slider-' + (index + 1) + '.png'}/>
                                    <div>
                                        <h3>0{index + 1} / <span>0{products_alternate_content.length}</span></h3>
                                        <p>{item.content}</p>
                                        <div>
                                            <img src={'icons/back.svg'} onClick={() => {
                                                products_alternate_slider.slickPrev()
                                            }}/>
                                            <img src={'icons/forward.svg'} onClick={() => {
                                                products_alternate_slider.slickNext()
                                            }}/>
                                        </div>
                                    </div>
                                </div>

                            </Fragment>)
                        })
                    }
                </Slider>
            </div>
        </div>

    </Fragment>)


}
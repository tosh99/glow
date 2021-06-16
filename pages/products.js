import styles from './styles/products.module.scss'
import Link from 'next/link'
import {Fragment, useEffect, useState} from "react";
import Slider from "react-slick";
import {motion} from "framer-motion"
import {InView, useInView} from 'react-intersection-observer';

export default function Products() {
    const settings = {
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

    const [current_body_slide, set_current_body_slide] = useState(0);
    const [body_slider, set_body_slider] = useState();
    const [favorite_slider, set_favorite_slider] = useState();
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

    useEffect(() => {
        console.log(current_body_slide);

    }, [current_body_slide])


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
                    }} {...settings}>
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
                        rtl.map((item, index) => {
                            return (<Fragment>
                                <div className={styles.cfSlide}>
                                    <img src={'images/products/fav/' + (0) + '.png'}/>
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


    </Fragment>)


}